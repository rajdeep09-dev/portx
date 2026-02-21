'use client'

import { motion } from 'framer-motion'

interface HeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  ctaText?: string
  ctaHref?: string
  backgroundImage?: string
}

export default function HeroSection({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref = '#',
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section
      className="w-full py-32 md:py-48 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    >
      {/* Overlay if background image */}
      {backgroundImage && <div className="absolute inset-0 bg-black/40"></div>}

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {subtitle && (
            <p className="text-accent-orange font-inter font-semibold text-sm md:text-base mb-4 uppercase tracking-wide">
              {subtitle}
            </p>
          )}
          
          <h1 className="text-4xl md:text-6xl font-clash font-bold text-black mb-6 text-balance">
            {title}
          </h1>

          {description && (
            <p className="text-lg md:text-xl text-gray-600 font-inter max-w-2xl mx-auto mb-8 text-pretty">
              {description}
            </p>
          )}

          {ctaText && (
            <motion.a
              href={ctaHref}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-accent-orange text-white px-8 py-3 rounded-lg font-inter font-semibold hover:bg-orange-600 transition-colors duration-300"
            >
              {ctaText}
            </motion.a>
          )}
        </motion.div>
      </div>
    </section>
  )
}
