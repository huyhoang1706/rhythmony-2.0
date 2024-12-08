import { AvatarFallback } from "@radix-ui/react-avatar";
import { Avatar, AvatarImage } from "./ui/avatar";

export default function UserAvatar() {
  return (
    <Avatar className="bg-neutral-800 text-neutral-100">
      <AvatarImage />
      <AvatarFallback>User</AvatarFallback>
    </Avatar>
  );
}
