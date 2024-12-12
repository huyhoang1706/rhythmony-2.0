"use client";

import { toggleCollapseLeftSideBar } from "@/store/app-layout-slice";
import { IoMenu } from "react-icons/io5";
import { useDispatch } from "react-redux";

export default function LeftSideBarButton() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleCollapseLeftSideBar());
  };

  return (
    <button onClick={handleClick} className="rounded-full bg-inherit p-2 hover:bg-neutral-600/40">
      <IoMenu className="size-6 text-neutral-400" />
    </button>
  );
}
