import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import FeatureCard from '@/components/FeatureCard'

export const metadata: Metadata = {
  title: 'Services - Portx',
  description: 'Explore our comprehensive creative services.',
}

const services = [
  {
    title: 'Animation',
    description: 'Create stunning animations that bring your designs to life with smooth, engaging motion design.',
    href: '/services/animation',
  },
  {
    title: 'Branding',
    description: 'Develop comprehensive brand identities that resonate with your audience and stand out.',
    href: '/services/branding',
  },
  {
    title: 'Framer Design',
    description: 'Build interactive prototypes and designs using Framer for the web and mobile platforms.',
    href: '/services/framer',
  },
  {
    title: 'UI/UX Design',
    description: 'Craft beautiful user interfaces with intuitive user experiences for modern digital products.',
    href: '/services/ui-ux',
  },
]

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        subtitle="Services"
        title="Creative Solutions for Modern Brands"
        description="From animation to branding, we offer comprehensive creative services to elevate your brand."
      />

      <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <FeatureCard
                key={service.title}
                title={service.title}
                description={service.description}
                href={service.href}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Let's Create Something Great
          </h2>
          <p className="text-lg text-gray-300 font-inter mb-8">
            Choose a service above and let's discuss how we can help your project succeed.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent-orange text-black px-8 py-3 rounded-lg font-inter font-semibold hover:bg-orange-600 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  )
}
