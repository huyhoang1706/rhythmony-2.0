'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  href: string
  name: string
  icon: React.ReactElement
  className?: string
  collapsed?: boolean
  small?: boolean
}

export default function NavLink({ href, name, className, icon, collapsed, small }: Props) {
  const pathName = usePathname()

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-5 rounded px-3 py-1',
        pathName === href ? 'bg-gradient-to-b from-cyan-500' : '',
        collapsed ? 'justify-center' : 'justify-start',
        className,
      )}
    >
      {icon}
      {!collapsed && (
        <span
          className={cn(
            'truncate',
            small ? 'text-sm' : 'text-lg',
            pathName === href ? 'text-white' : '',
          )}
        >
          {name}
        </span>
      )}
    </Link>
  )
}
