import type { Metadata } from 'next'
import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import FeatureCard from '@/components/FeatureCard'

export const metadata: Metadata = {
  title: 'Animation Services - Portx',
  description: 'Create stunning animations and motion design for your projects with Portx.',
}

const features = [
  {
    title: 'Micro-interactions',
    description: 'Subtle, delightful interactions that enhance user engagement.',
  },
  {
    title: 'Page Transitions',
    description: 'Smooth, seamless transitions between pages for better UX.',
  },
  {
    title: 'Scroll Animations',
    description: 'Eye-catching animations triggered by user scroll interactions.',
  },
  {
    title: 'Loading States',
    description: 'Beautiful loading animations that keep users engaged.',
  },
]

export default function AnimationService() {
  return (
    <>
      <HeroSection
        subtitle="Animation"
        title="Motion Design Excellence"
        description="Transform your digital experiences with engaging animations and motion design that captivate and delight."
      />

      <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-clash font-bold text-center mb-16">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-clash font-bold mb-6">
            Ready to Animate Your Vision?
          </h2>
          <p className="text-lg text-gray-300 font-inter mb-8">
            Let's create motion-rich experiences that engage and delight your users.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent-orange text-black px-8 py-3 rounded-lg font-inter font-semibold hover:bg-orange-600 transition-colors duration-300"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </>
  )
}
