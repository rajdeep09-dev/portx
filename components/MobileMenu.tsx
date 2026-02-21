'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Animation', href: '/services/animation' },
  { label: 'Branding', href: '/services/branding' },
  { label: 'Framer', href: '/services/framer' },
  { label: 'UI/UX', href: '/services/ui-ux' },
  { label: 'Works', href: '/works' },
  { label: 'Contact', href: '/contact' },
]

interface MobileMenuProps {
  onClose: () => void
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="md:hidden bg-white border-b border-gray-100 px-4 py-6"
    >
      <nav className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="text-black hover:text-accent-orange transition-colors duration-300 py-2 text-sm font-inter font-medium"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </motion.div>
  )
}
