import { SearchIcon } from 'lucide-react'

export default function SearchBar() {
  return (
    <div className="relative flex w-full max-w-lg rounded-full border border-neutral-400 px-3 py-2">
      <SearchIcon className="mr-2 text-neutral-200" />
      <input
        className="h-full w-full border-none bg-transparent text-white outline-none"
        placeholder="What do you want to play?"
      />
    </div>
  )
}
