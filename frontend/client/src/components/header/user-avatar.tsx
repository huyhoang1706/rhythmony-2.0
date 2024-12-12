import { AvatarFallback } from "@radix-ui/react-avatar";
import { Avatar, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SignOutButton from "./sign-out-button";

interface Props {
  name: string;
  image?: string;
}

export default function UserAvatar({ name, image }: Props) {
  const formatName = (name: string) => {
    const words = name.trim().split(/\s+/);
    const initials = words.map((word) => word[0].toUpperCase()).join("");
    return initials.slice(0, 2);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="bg-neutral-800 text-neutral-100">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="flex h-full w-full items-center justify-center">
            {formatName(name)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>
          <SignOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
