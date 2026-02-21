import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import FeatureCard from '@/components/FeatureCard'

export const metadata: Metadata = {
  title: 'UI/UX Design Services - Portx',
  description: 'Beautiful user interfaces and experiences for modern digital products.',
}

const features = [
  {
    title: 'User Research',
    description: 'Deep insights into user behavior and needs.',
  },
  {
    title: 'Wireframing',
    description: 'Comprehensive wireframes that define user flows.',
  },
  {
    title: 'UI Design',
    description: 'Stunning visual interfaces that are intuitive and accessible.',
  },
  {
    title: 'Usability Testing',
    description: 'Validated designs through thorough user testing.',
  },
]

export default function UIUXService() {
  return (
    <>
      <HeroSection
        subtitle="UI/UX"
        title="User-Centric Design"
        description="Craft beautiful, intuitive user experiences that engage users and drive conversions."
      />

      <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
            Our Process
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
            Design Experiences That Matter
          </h2>
          <p className="text-lg text-gray-300 font-inter mb-8">
            Let's create user experiences that not only look great but also solve real problems.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent-orange text-black px-8 py-3 rounded-lg font-inter font-semibold hover:bg-orange-600 transition-colors duration-300"
          >
            Let's Talk
          </a>
        </div>
      </section>
    </>
  )
}
