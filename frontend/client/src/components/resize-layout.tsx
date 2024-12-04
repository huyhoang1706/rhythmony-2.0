"use client";

import LeftSideBar from "@/components/left-sidebar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import Queue from "./queue";

interface Props {
  children: React.ReactNode;
  defaultLayout?: number[];
}

export default function ResizeLayout({ children, defaultLayout = [20, 60, 20] }: Props) {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };

  return (
    <ResizablePanelGroup autoSaveId="resize" direction="horizontal" onLayout={onLayout}>
      <ResizablePanel id="left-side" defaultSize={defaultLayout[0]} maxSize={25} minSize={8}>
        <LeftSideBar />
      </ResizablePanel>
      <ResizableHandle className="opacity-0" />
      <ResizablePanel id="main" defaultSize={defaultLayout[1]}>
        <div className="h-full w-full px-2">{children}</div>
      </ResizablePanel>
      <ResizableHandle className="opacity-0" />
      <ResizablePanel id="right-side" defaultSize={defaultLayout[2]} maxSize={25}>
        <aside className="h-full rounded-lg bg-neutral-800">
          <Queue />
        </aside>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
