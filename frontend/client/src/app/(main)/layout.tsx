import Header from "@/components/header";
import Player from "@/components/player";
import NavigationButton from "@/components/navigation-button";
import ResizeLayout from "@/components/resize-layout";
import { cookies } from "next/headers";
import { Suspense } from "react";

export default async function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const layout = (await cookies()).get("react-resizable-panels:layout");

  let defaultLayout;
  if (layout) {
    defaultLayout = JSON.parse(layout.value);
  }

  return (
    <div className="flex h-screen min-w-[680px] flex-col">
      <Header />
      <div className="h-[calc(100vh-51px)] bg-neutral-900 px-2 pb-2">
        <div className="mb-2 h-[calc(100%-80px)]">
          <ResizeLayout defaultLayout={defaultLayout}>
            <main className="custom-scroll-bar h-full w-full overflow-y-auto rounded-lg bg-gradient-to-b from-neutral-700/40 p-2">
              <div className="mx-auto w-full 4xl:max-w-[1920px]">
                <div className="px-5 pt-3">
                  <NavigationButton />
                </div>
                <div className="p-5">{children}</div>
              </div>
            </main>
          </ResizeLayout>
        </div>

        <Suspense fallback={null}>
          <Player />
        </Suspense>
      </div>
    </div>
  );
}
