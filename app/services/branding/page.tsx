import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import FeatureCard from '@/components/FeatureCard'

export const metadata: Metadata = {
  title: 'Branding Services - Portx',
  description: 'Build powerful brand identities that resonate with your audience.',
}

const features = [
  {
    title: 'Logo Design',
    description: 'Distinctive logos that capture your brand essence.',
  },
  {
    title: 'Brand Guidelines',
    description: 'Comprehensive brand guidelines for consistency across all touchpoints.',
  },
  {
    title: 'Color Palettes',
    description: 'Strategic color systems that evoke the right emotions.',
  },
  {
    title: 'Typography',
    description: 'Carefully selected typefaces that communicate your brand voice.',
  },
]

export default function BrandingService() {
  return (
    <>
      <HeroSection
        subtitle="Branding"
        title="Brand Identity Design"
        description="Build a powerful brand identity that resonates with your audience and stands out from the competition."
      />

      <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-clash font-bold text-center mb-16">
            Branding Solutions
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
            Define Your Brand Today
          </h2>
          <p className="text-lg text-gray-300 font-inter mb-8">
            Let's create a brand identity that sets you apart and builds lasting connections with your audience.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent-orange text-black px-8 py-3 rounded-lg font-inter font-semibold hover:bg-orange-600 transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
      </section>
    </>
  )
}
