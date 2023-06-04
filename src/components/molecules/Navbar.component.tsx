import { Logo } from '@components/atoms'
import { cn } from '@utils/cn'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <nav className="relative flex justify-between items-center py-12">
      <Logo />
      <Bars3Icon
        className="block md:hidden cursor-pointer h-6 w-6 text-gray-800"
        onClick={() => setShowNav(prev => !prev)}
      />

      {showNav && (
        <ul
          className={cn(
            'flex flex-col gap-3 md:hidden absolute top-20 right-1 border bg-white p-2 rounded text-center'
          )}
        >
          <li className={cn('cursor-pointer')}>Home</li>
          <li className={cn('cursor-pointer')}>Pricing</li>
          <li className={cn('cursor-pointer')}>Documentation</li>
        </ul>
      )}

      <ul className={cn('hidden md:flex md:space-x-6')}>
        <li className={cn('cursor-pointer')}>Home</li>
        <li className={cn('cursor-pointer')}>Pricing</li>
        <li className={cn('cursor-pointer')}>Documentation</li>
      </ul>
    </nav>
  )
}
