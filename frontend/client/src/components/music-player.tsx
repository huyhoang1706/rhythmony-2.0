'use client'

import useTransport from '@/store/transport-store'
import {
  CirclePlay,
  CirclePause,
  Shuffle,
  ChevronFirst,
  ChevronLast,
  Repeat,
  Repeat1,
  ListMusic,
  Volume2Icon,
} from 'lucide-react'
import { Slider } from './ui/slider'

export default function MusicPlayer() {
  const { isPlaying, isShuffle, repeat, togglePlay, toggleShuffle, handleRepeat } = useTransport()
  return (
    <footer className="h-[80px]">
      <div className="flex h-full w-full items-center justify-between rounded-lg bg-gradient-to-b from-white/10 px-5">
        <div>Home</div>
        <div className="flex w-auto flex-col items-center justify-center gap-3">
          <div className="flex items-center gap-3">
            <button className="transport-button" onClick={toggleShuffle}>
              <Shuffle className={`${isShuffle ? 'text-rose-500' : 'text-neutral-400'}`} />
            </button>
            <button>
              <ChevronFirst className="transport-button size-8 text-neutral-400" />
            </button>
            <button onClick={togglePlay} className="transport-button size-8 text-neutral-400">
              <div
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                key={isPlaying ? 'pause' : 'play'}
              >
                {isPlaying ? (
                  <CirclePause className="size-8 text-rose-500" />
                ) : (
                  <CirclePlay className="size-8 text-rose-500" />
                )}
              </div>
            </button>
            <button className="transport-button">
              <ChevronLast className="size-8 text-neutral-400" />
            </button>
            <button className="transport-button" onClick={handleRepeat}>
              {repeat === 'no-repeat' && <Repeat className="text-neutral-400" />}
              {repeat === 'repeat' && <Repeat className="text-rose-500" />}
              {repeat === 'repeat-1' && <Repeat1 className="text-rose-500" />}
            </button>
          </div>

          <div>
            <Slider
              defaultValue={[0]}
              max={100}
              step={1}
              className="w-[280px] md:w-[400px] lg:w-[600px]"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button>
            <ListMusic className="size-6 text-neutral-400" />
          </button>
          <Volume2Icon className="size-6 text-neutral-400" />
          <Slider defaultValue={[100]} step={1} className="w-28" />
        </div>
      </div>
    </footer>
  )
}
