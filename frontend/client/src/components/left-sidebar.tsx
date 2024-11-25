'use client'

import { useEffect, useState } from 'react'
import { Heart, Home, PlusCircle, SquareLibrary } from 'lucide-react'
import NavLink from './nav-link'
import Playlist from './playlist'

export default function LeftSideBar() {
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    const sidebar = document.querySelector('aside')
    if (sidebar) {
      const observer = new ResizeObserver(([entry]) => {
        setWidth(entry.contentRect.width)
      })
      observer.observe(sidebar)
      return () => observer.disconnect()
    }
  }, [])
  const isSmall = width >= 120 && width < 150
  const isCollapsed = width < 120
  return (
    <aside className="flex h-full min-w-[60px] flex-col rounded-lg bg-neutral-800 p-5 text-neutral-400">
      <div className="mb-3 space-y-3">
        <NavLink
          href="/"
          name="Home"
          icon={<Home className="size-6 text-white" />}
          collapsed={isCollapsed}
          small={isSmall}
        />
        <NavLink
          href="/favorites"
          name="Favorites"
          icon={<Heart className="size-6 text-white" />}
          collapsed={isCollapsed}
          small={isSmall}
        />
        <NavLink
          href="/libraries"
          name="Libraries"
          icon={<SquareLibrary className="size-6 text-white" />}
          collapsed={isCollapsed}
          small={isSmall}
        />
      </div>
      <div
        className={`my-3 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}
      >
        {!isCollapsed && <span className="text-xl font-bold text-white">Playlists</span>}
        <button>
          <PlusCircle className="text-rose-500" />
        </button>
      </div>
      <Playlist />
    </aside>
  )
}
