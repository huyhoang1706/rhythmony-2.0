"use client";

import { useEffect, useState } from "react";
import { PlusCircle } from "lucide-react";
import NavLink from "./nav-link";
import Playlist from "./playlist";
import { cn } from "@/lib/utils";
import { PiHouseFill, PiHeart, PiHouseThin, PiHeartFill } from "react-icons/pi";
import { MdLibraryMusic, MdOutlineLibraryMusic } from "react-icons/md";

export default function LeftSideBar() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const sidebar = document.querySelector("aside");
    if (sidebar) {
      const observer = new ResizeObserver(([entry]) => {
        setWidth(entry.contentRect.width);
      });
      observer.observe(sidebar);
      return () => observer.disconnect();
    }
  }, []);
  const isSmall = width >= 120 && width < 150;
  const isCollapsed = width < 120;
  return (
    <aside
      className={cn(
        "flex h-full min-w-[100px] flex-col rounded-lg bg-neutral-800 p-5 text-neutral-400",
      )}
    >
      <div className="mb-3 space-y-3">
        <NavLink
          href="/"
          name="Home"
          Icon={PiHouseThin}
          ActiveIcon={PiHouseFill}
          collapsed={isCollapsed}
          small={isSmall}
        />
        <NavLink
          href="/favorites"
          name="Favorites"
          Icon={PiHeart}
          ActiveIcon={PiHeartFill}
          collapsed={isCollapsed}
          small={isSmall}
        />
        <NavLink
          href="/libraries"
          name="Libraries"
          Icon={MdOutlineLibraryMusic}
          ActiveIcon={MdLibraryMusic}
          collapsed={isCollapsed}
          small={isSmall}
        />
      </div>
      <div
        className={`my-3 flex items-center ${isCollapsed ? "justify-center" : "justify-between"}`}
      >
        {!isCollapsed && <span className="text-xl font-bold text-white">Playlists</span>}
        <button>
          <PlusCircle className="text-rose-500" />
        </button>
      </div>
      <Playlist />
    </aside>
  );
}
