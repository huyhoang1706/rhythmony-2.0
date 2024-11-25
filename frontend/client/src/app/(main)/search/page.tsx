import Genres from './genres'

export default function SearchPage() {
  return (
    <main className="custom-scroll-bar h-full w-full overflow-y-auto rounded-lg bg-gradient-to-b from-neutral-700/40 p-2 text-neutral-100">
      <h1 className="text-2xl font-bold">Browse All</h1>
      <Genres />
    </main>
  )
}
