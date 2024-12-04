"use client";

import { cn } from "@/lib/utils";
import { average } from "color.js";
import { useEffect, useState } from "react";

interface Props {
  className: string;
  idSelector: string;
}

export default function Gradient({ className, idSelector }: Props) {
  const [color, setColor] = useState<string | undefined>(undefined);
  useEffect(() => {
    const img = document.getElementById(idSelector) as HTMLImageElement;
    average(img!, { format: "hex" }).then((c) => {
      setColor(c as string);
    });
  }, []);

  return (
    <div
      className={cn(`h-3/4 w-full`, className)}
      style={{ background: `linear-gradient(${color!}, transparent)` }}
    ></div>
  );
}
