"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons/lib";

interface Props {
  href: string;
  name: string;
  Icon: IconType;
  ActiveIcon: IconType;
  className?: string;
  collapsed?: boolean;
  small?: boolean;
}

export default function NavLink({
  href,
  name,
  className,
  Icon,
  collapsed,
  small,
  ActiveIcon,
}: Props) {
  const pathName = usePathname();

  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-5 rounded py-1",
        collapsed ? "justify-center" : "justify-start",
        className,
      )}
    >
      {isActive
        ? ActiveIcon && <ActiveIcon className="size-6 text-white" />
        : Icon && <Icon className="size-6 text-neutral-400" />}
      {!collapsed && (
        <span
          className={cn("truncate", small ? "text-sm" : "text-lg", isActive ? "text-white" : "")}
        >
          {name}
        </span>
      )}
    </Link>
  );
}
