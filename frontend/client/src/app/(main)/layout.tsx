import Header from "@/components/header";
import AudioPlayer from "@/components/audio-player";
import NavigationButton from "@/components/navigation-button";
import { Suspense } from "react";
import LeftSideBar from "@/components/left-sidebar";
import Queue from "@/components/queue";
import { ScrollArea } from "@/components/ui/scroll-area";

export default async function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative flex h-screen min-w-[800px] flex-col items-stretch">
      <Header />
      <div className="h-[calc(100vh-56px)] bg-neutral-950 px-2 pb-2">
        <div className="mb-2 flex h-[calc(100%-80px)] gap-2">
          <LeftSideBar />
          <ScrollArea className="h-full w-full rounded-lg bg-neutral-900">
            <main className="relative">
              <div className="mx-auto h-full w-full 4xl:max-w-[1920px]">
                <div className="relative z-50 px-5 pt-3">
                  <NavigationButton />
                </div>
                <div className="h-full p-5">{children}</div>
              </div>
            </main>
          </ScrollArea>
          <Queue />
        </div>

        <Suspense fallback={null}>
          <AudioPlayer />
        </Suspense>
      </div>
    </div>
  );
}
