import Link from "next/link";
import SearchBar from "./search-bar";
import UserAvatar from "./user-avatar";
import { SiApplemusic } from "react-icons/si";
import LeftSideBarButton from "./left-sidebar-button";

export default function Header() {
  return (
    <header className="grid grid-cols-3 items-center justify-between bg-neutral-950 p-2">
      <div className="ml-3 flex items-center gap-2">
        <LeftSideBarButton />
        <div className="flex h-[35px] items-end gap-2">
          <Link href="/" className="flex gap-1">
            <SiApplemusic className="size-6 text-neutral-300" />
            <span className="inline-block bg-gradient-to-r from-cyan-500 via-indigo-500 to-rose-400 bg-clip-text text-lg font-light text-transparent">
              Rhythmony
            </span>
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <SearchBar />
      </div>
      <div className="flex justify-end">
        <UserAvatar />
      </div>
    </header>
  );
}
