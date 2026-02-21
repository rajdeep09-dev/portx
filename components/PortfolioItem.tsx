'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface PortfolioItemProps {
  title: string
  category: string
  description: string
  href: string
  delay?: number
}

export default function PortfolioItem({
  title,
  category,
  description,
  href,
  delay = 0,
}: PortfolioItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Link href={href}>
        <div className="bg-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full">
          <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500 font-inter text-sm uppercase tracking-wide">{category}</p>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-clash font-bold text-black mb-2">
              {title}
            </h3>
            <p className="text-gray-600 font-inter text-sm">
              {description}
            </p>
            <div className="mt-4 inline-flex items-center text-accent-orange font-inter font-semibold text-sm">
              View Project <span className="ml-2">→</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
