import Link from "next/link";
import SearchBar from "./search-bar";
import UserAvatar from "./user-avatar";
import { SiApplemusic } from "react-icons/si";
import LeftSideBarButton from "../left-sidebar/left-sidebar-button";
import { getSession } from "next-auth/react";
import AuthButton from "./auth-button";
import { getServerSession } from "next-auth";

export default async function Header() {
  const session = await getServerSession();

  return (
    <header className="grid grid-cols-3 items-center justify-between bg-neutral-950 p-2">
      <div className="ml-3 flex items-center gap-4">
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
        {session ? (
          <UserAvatar name={session.user?.name as string} />
        ) : (
          <AuthButton title="Sign In" />
        )}
      </div>
    </header>
  );
}
