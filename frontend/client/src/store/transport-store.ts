import { create } from 'zustand'

type State = {
  isPlaying: boolean
  isShuffle: boolean
  repeat: 'no-repeat' | 'repeat' | 'repeat-1'
}

type Action = {
  togglePlay: () => void
  toggleShuffle: () => void
  handleRepeat: () => void
}

const useTransport = create<State & Action>((set) => ({
  isPlaying: false,
  isShuffle: false,
  repeat: 'no-repeat',
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  toggleShuffle: () => set((state) => ({ isShuffle: !state.isShuffle })),
  handleRepeat: () =>
    set((state) => ({
      repeat:
        state.repeat === 'no-repeat'
          ? 'repeat'
          : state.repeat === 'repeat'
            ? 'repeat-1'
            : 'no-repeat',
    })),
}))

export default useTransport
