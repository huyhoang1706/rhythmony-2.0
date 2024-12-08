"use client";

import { cn } from "@/lib/utils";
import Vibrant from "node-vibrant";
import { useEffect, useState } from "react";

interface Props {
  className: string;
  idSelector: string;
}

export default function Gradient({ className, idSelector }: Props) {
  const [color, setColor] = useState<string | undefined>(undefined);
  useEffect(() => {
    const img = document.getElementById(idSelector) as HTMLImageElement;
    async function getVibrant(img: HTMLImageElement) {
      const palatte = await Vibrant.from(img).getPalette();
      const hexColorValue = palatte.Vibrant?.getHex();
      setColor(hexColorValue);
    }

    getVibrant(img);
  }, []);

  return (
    <div
      className={cn(`h-[440px] w-full`, className)}
      style={{ background: `linear-gradient(${color!}, transparent)` }}
    ></div>
  );
}
