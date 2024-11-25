import Header from "@/components/header";
import MusicPlayer from "@/components/music-player";
import ResizeLayout from "@/components/resize-layout";
import { cookies } from "next/headers";

export default async function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const layout = (await cookies()).get("react-resizable-panels:layout");

  let defaultLayout;
  if (layout) {
    defaultLayout = JSON.parse(layout.value);
  }

  return (
    <div className="flex h-screen min-w-[600px] flex-col">
      <Header />
      <div className="h-[calc(100vh-56px)] bg-neutral-900 p-2">
        <div className="mb-2 h-[calc(100%-80px)]">
          <ResizeLayout defaultLayout={defaultLayout}>{children}</ResizeLayout>
        </div>

        <MusicPlayer />
      </div>
    </div>
  );
}
