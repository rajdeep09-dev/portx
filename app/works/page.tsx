import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import PortfolioItem from '@/components/PortfolioItem'

export const metadata: Metadata = {
  title: 'Portfolio - Portx',
  description: 'Browse our recent creative projects and portfolio.',
}

const projects = [
  {
    title: 'Agencify',
    category: 'Branding & Web',
    description: 'Complete brand identity and website redesign for a creative agency.',
    slug: 'agencify',
  },
  {
    title: 'Antony Studios',
    category: 'UI/UX Design',
    description: 'Portfolio website showcasing architectural and design work.',
    slug: 'antony',
  },
  {
    title: 'Bruno Digital',
    category: 'Web Development',
    description: 'Modern digital agency website with interactive animations.',
    slug: 'bruno',
  },
  {
    title: 'Candreva Design',
    category: 'Brand Design',
    description: 'Luxury brand identity and packaging design project.',
    slug: 'candreva',
  },
  {
    title: 'Sotto Collective',
    category: 'Animation',
    description: 'Motion-rich website with scroll-triggered animations.',
    slug: 'sotto',
  },
  {
    title: 'Tesla Reimagined',
    category: 'UI/UX Concept',
    description: 'Concept redesign of Tesla website for enhanced user experience.',
    slug: 'tesla',
  },
  {
    title: 'ZCF Architects',
    category: 'Web Design',
    description: 'Architecture portfolio website with immersive design gallery.',
    slug: 'zcf',
  },
]

export default function WorksPage() {
  return (
    <>
      <HeroSection
        subtitle="Portfolio"
        title="Our Recent Works"
        description="Explore the projects we're proud to showcase, showcasing our expertise in design, development, and digital innovation."
      />

      <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <PortfolioItem
                key={project.slug}
                title={project.title}
                category={project.category}
                description={project.description}
                href={`/works/${project.slug}`}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Let's Create Your Success Story
          </h2>
          <p className="text-lg text-gray-300 font-inter mb-8">
            Ready to see your project come to life? Let's discuss how we can help transform your vision.
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
