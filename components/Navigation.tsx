'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Works', href: '/works' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center gap-8">
      {navLinks.map((link) => {
        const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
        
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-inter font-medium transition-colors duration-300 relative ${
              isActive
                ? 'text-accent-orange'
                : 'text-black hover:text-accent-orange'
            }`}
          >
            {link.label}
            {isActive && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-orange"></span>
            )}
          </Link>
        )
      })}
    </nav>
  )
}
