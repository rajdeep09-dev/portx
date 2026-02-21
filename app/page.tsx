import type { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import HeroSection from '@/components/HeroSection'
import FeatureCard from '@/components/FeatureCard'

export const metadata: Metadata = {
  title: 'Portx - Personal Portfolio & Agency',
  description: 'Portx is a sleek and modern Framer template designed for creative professionals, freelancers, and agencies who want to showcase their work with style and impact.',
  openGraph: {
    title: 'Portx - Personal Portfolio & Agency',
    description: 'Portx is a sleek and modern Framer template designed for creative professionals, freelancers, and agencies who want to showcase their work with style and impact.',
    type: 'website',
    url: 'https://portx.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portx - Personal Portfolio & Agency',
    description: 'Portx is a sleek and modern Framer template designed for creative professionals, freelancers, and agencies.',
  },
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

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection
        subtitle="Welcome to Portx"
        title="Creative Excellence Redefined"
        description="Showcase your work with a sleek, modern portfolio designed for creative professionals and agencies."
        ctaText="Explore Our Work"
        ctaHref="#works"
      />

      {/* Services Section */}
      <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-black mb-4">
            Our Services
          </h2>
            <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
              From brand strategy to digital design, we create solutions that elevate your presence.
            </p>
          </div>

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

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-300 font-inter mb-8 max-w-2xl mx-auto">
            Let's collaborate and create something extraordinary together. Get in touch with us today.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent-orange text-black px-8 py-3 rounded-lg font-inter font-semibold hover:bg-orange-600 transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
      </section>
    </PageLayout>
  )
}
