"use client";

import { useEffect, useState } from "react";
import { PlusCircle } from "lucide-react";
import NavLink from "./nav-link";
import Playlist from "../playlist/playlist";
import { cn } from "@/lib/utils";
import { PiHouseFill, PiHeart, PiHouseThin, PiHeartFill } from "react-icons/pi";
import { MdLibraryMusic, MdOutlineLibraryMusic } from "react-icons/md";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function LeftSideBar() {
  const [isCollapse, setIsCollapse] = useState(false);
  const { isLeftSideBarCollapse } = useSelector((state: RootState) => state.appLayout);

  useEffect(() => {
    const checkSidebarCollapse = () => {
      const shouldCollapse = window.innerWidth < 768 || false;

      setIsCollapse(shouldCollapse);
    };

    checkSidebarCollapse();

    window.addEventListener("resize", checkSidebarCollapse);

    return () => {
      window.removeEventListener("resize", checkSidebarCollapse);
    };
  }, [isCollapse]);

  const shouldCollapse = isCollapse || isLeftSideBarCollapse;

  return (
    <aside
      className={cn(
        "flex h-full flex-col rounded-lg bg-neutral-900 text-neutral-400",
        shouldCollapse ? "w-[76px]" : "w-[280px] xl:w-[320px]",
      )}
    >
      <div className="space-y-3 p-5">
        <NavLink
          href="/"
          name="Home"
          Icon={PiHouseThin}
          ActiveIcon={PiHouseFill}
          collapsed={shouldCollapse}
        />
        <NavLink
          href="/favorites"
          name="Favorites"
          Icon={PiHeart}
          ActiveIcon={PiHeartFill}
          collapsed={shouldCollapse}
        />
        <NavLink
          href="/libraries"
          name="Libraries"
          Icon={MdOutlineLibraryMusic}
          ActiveIcon={MdLibraryMusic}
          collapsed={shouldCollapse}
        />
      </div>
      <div
        className={`mb-3 flex items-center px-5 ${shouldCollapse ? "justify-center" : "justify-between"}`}
      >
        {!shouldCollapse && <span className="text-xl font-bold text-white">Playlists</span>}
        <button>
          <PlusCircle className="text-rose-500" />
        </button>
      </div>
      <Playlist />
    </aside>
  );
}
