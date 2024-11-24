import Header from '@/components/header'
import LeftSideBar from '@/components/left-sidebar'
import MusicPlayer from '@/components/music-player'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-screen min-w-[600px] flex-col">
      <Header />
      <div className="flex-1 bg-neutral-900 p-2">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={20} maxSize={25} minSize={8}>
            <LeftSideBar />
          </ResizablePanel>
          <ResizableHandle className="opacity-0" />
          <ResizablePanel>
            <main className="h-full w-full px-2">{children}</main>
          </ResizablePanel>
          <ResizableHandle className="opacity-0" />
          <ResizablePanel defaultSize={15} maxSize={25}>
            RightSize
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <MusicPlayer />
    </div>
  )
}
