"use client";

import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";

interface Props {
  title: string;
  className?: string;
}

export default function AuthButton({ title, className }: Props) {
  return (
    <button
      onClick={() => signIn("keycloak")}
      className={cn(
        "rounded-full bg-neutral-100 px-3 py-1 font-semibold text-neutral-900",
        className,
      )}
    >
      {title}
    </button>
  );
}
