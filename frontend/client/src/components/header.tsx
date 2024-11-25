import SearchBar from './search-bar'
import UserAvatar from './user-avatar'

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-neutral-900 p-2">
      <div>
        <img src="https://img.logoipsum.com/289.svg" alt="logo" />
      </div>
      <SearchBar />
      <UserAvatar />
    </header>
  )
}
