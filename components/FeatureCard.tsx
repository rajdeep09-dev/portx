'use client'

import { motion } from 'framer-motion'

interface FeatureCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  delay?: number
  href?: string
}

export default function FeatureCard({
  title,
  description,
  icon,
  delay = 0,
  href = '#',
}: FeatureCardProps) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.2 }}
      className="p-6 md:p-8 rounded-xl bg-white border border-gray-200 hover:border-accent-orange hover:shadow-lg transition-all duration-300 block h-full"
    >
      {icon && (
        <div className="text-4xl mb-4 text-accent-orange">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl md:text-2xl font-display font-bold text-black mb-3">
        {title}
      </h3>
      
      <p className="text-gray-600 font-inter text-base leading-relaxed">
        {description}
      </p>
    </motion.a>
  )
}
