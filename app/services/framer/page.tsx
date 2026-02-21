import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import FeatureCard from '@/components/FeatureCard'

export const metadata: Metadata = {
  title: 'Framer Design Services - Portx',
  description: 'Interactive prototypes and designs built with Framer for web and mobile.',
}

const features = [
  {
    title: 'Interactive Prototypes',
    description: 'High-fidelity prototypes with real interactions and animations.',
  },
  {
    title: 'Component Libraries',
    description: 'Reusable component systems for scalable design solutions.',
  },
  {
    title: 'Responsive Design',
    description: 'Designs that work beautifully across all screen sizes.',
  },
  {
    title: 'Web Development',
    description: 'Export and deploy Framer designs directly to production.',
  },
]

export default function FramerService() {
  return (
    <>
      <HeroSection
        subtitle="Framer"
        title="Interactive Design with Framer"
        description="Build interactive prototypes and designs that come to life with Framer's powerful platform."
      />

      <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
            Framer Expertise
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
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Build Interactivity with Framer
          </h2>
          <p className="text-lg text-gray-300 font-inter mb-8">
            Transform your design ideas into fully interactive prototypes and web experiences.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent-orange text-black px-8 py-3 rounded-lg font-inter font-semibold hover:bg-orange-600 transition-colors duration-300"
          >
            Start Designing
          </a>
        </div>
      </section>
    </>
  )
}
