"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toggleAuthModal } from "@/store/app-layout-slice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Link from "next/link";

export default function AuthModal() {
  const dispatch = useDispatch();
  const { isAuthModalOpen } = useSelector((state: RootState) => state.appLayout);
  return (
    <Dialog modal={true} open={isAuthModalOpen} onOpenChange={() => dispatch(toggleAuthModal())}>
      <DialogContent>
        <VisuallyHidden.Root>
          <DialogTitle>Start Listening with Your Rhythmony Account Right Now</DialogTitle>
        </VisuallyHidden.Root>
        <div className="flex gap-5 text-neutral-100">
          <div className="basis-1/2"></div>
          <div className="flex basis-1/2 flex-col items-center gap-5">
            <h1 className="text-center text-lg font-bold">
              Start listening with a Rhythmony account
            </h1>
            <button className="rounded-full bg-rose-500 px-5 py-2 text-neutral-100">
              Sign Up Now
            </button>
            <p className="text-sm text-neutral-400">Already have an account?</p>
          </div>
        </div>
      </DialogContent>
      <DialogClose />
    </Dialog>
  );
}
