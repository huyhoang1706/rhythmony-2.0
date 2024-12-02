import Link from "next/link";
import SearchBar from "./search-bar";
import UserAvatar from "./user-avatar";
import { SiApplemusic } from "react-icons/si";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-neutral-900 p-2">
      <div className="flex h-[35px] items-end">
        <Link href="/" className="flex gap-1">
          <SiApplemusic className="size-6 text-neutral-300" />
          <span className="inline-block bg-gradient-to-r from-cyan-500 via-indigo-500 to-rose-400 bg-clip-text text-lg font-light text-transparent">
            Rhythmony
          </span>
        </Link>
      </div>
      <SearchBar />
      <UserAvatar />
    </header>
  );
}
