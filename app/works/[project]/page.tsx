import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'

interface ProjectPageProps {
  params: Promise<{ project: string }>
}

const projectData: Record<string, { title: string; category: string; description: string; fullDescription: string; client: string; year: string; services: string[] }> = {
  agencify: {
    title: 'Agencify',
    category: 'Branding & Web',
    description: 'Complete brand identity and website redesign for a creative agency.',
    fullDescription: 'A comprehensive rebranding project that included logo design, brand guidelines, and a modern website with interactive animations.',
    client: 'Agencify Creative Studio',
    year: '2024',
    services: ['Branding', 'Web Design', 'Animation'],
  },
  antony: {
    title: 'Antony Studios',
    category: 'UI/UX Design',
    description: 'Portfolio website showcasing architectural and design work.',
    fullDescription: 'A beautiful portfolio website designed to showcase architectural projects with high-quality imagery and smooth interactions.',
    client: 'Antony Architecture',
    year: '2024',
    services: ['UI/UX Design', 'Web Development'],
  },
  bruno: {
    title: 'Bruno Digital',
    category: 'Web Development',
    description: 'Modern digital agency website with interactive animations.',
    fullDescription: 'A modern, interactive website for a digital agency featuring scroll animations, micro-interactions, and a responsive design.',
    client: 'Bruno Digital Agency',
    year: '2024',
    services: ['Web Design', 'Animation', 'Development'],
  },
  candreva: {
    title: 'Candreva Design',
    category: 'Brand Design',
    description: 'Luxury brand identity and packaging design project.',
    fullDescription: 'A premium brand identity project including logo design, packaging, and marketing collateral for a luxury design studio.',
    client: 'Candreva Studio',
    year: '2024',
    services: ['Branding', 'Packaging Design'],
  },
  sotto: {
    title: 'Sotto Collective',
    category: 'Animation',
    description: 'Motion-rich website with scroll-triggered animations.',
    fullDescription: 'An immersive website experience built with advanced animations and scroll-triggered effects that engage users throughout their journey.',
    client: 'Sotto Collective',
    year: '2024',
    services: ['Animation', 'Web Design', 'Framer'],
  },
  tesla: {
    title: 'Tesla Reimagined',
    category: 'UI/UX Concept',
    description: 'Concept redesign of Tesla website for enhanced user experience.',
    fullDescription: 'A concept redesign of the Tesla website focused on improving user experience, navigation, and visual hierarchy.',
    client: 'Personal Project',
    year: '2024',
    services: ['UI/UX Design', 'Web Design'],
  },
  zcf: {
    title: 'ZCF Architects',
    category: 'Web Design',
    description: 'Architecture portfolio website with immersive design gallery.',
    fullDescription: 'An elegant portfolio website for an architectural firm featuring a sophisticated gallery experience and project showcases.',
    client: 'ZCF Architecture',
    year: '2024',
    services: ['Web Design', 'UI/UX Design'],
  },
}

export async function generateStaticParams() {
  return Object.keys(projectData).map((project) => ({
    project,
  }))
}

export async function generateMetadata(props: ProjectPageProps): Promise<Metadata> {
  const params = await props.params
  const project = projectData[params.project]
  
  if (!project) {
    return {}
  }

  return {
    title: `${project.title} - Portx Portfolio`,
    description: project.description,
  }
}

export default async function ProjectPage(props: ProjectPageProps) {
  const params = await props.params
  const project = projectData[params.project]

  if (!project) {
    notFound()
  }

  return (
    <>
      <HeroSection
        title={project.title}
        subtitle={project.category}
        description={project.description}
      />

      <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Project Details */}
          <div className="mb-12 pb-12 border-b border-gray-200">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-black mb-6">
              Project Overview
            </h2>
            <p className="text-lg text-gray-600 font-inter leading-relaxed mb-8">
              {project.fullDescription}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <h3 className="text-sm font-inter font-semibold text-gray-500 uppercase mb-2">Client</h3>
                <p className="text-lg font-inter font-bold text-black">{project.client}</p>
              </div>
              <div>
                <h3 className="text-sm font-inter font-semibold text-gray-500 uppercase mb-2">Year</h3>
                <p className="text-lg font-inter font-bold text-black">{project.year}</p>
              </div>
              <div className="col-span-2">
                <h3 className="text-sm font-inter font-semibold text-gray-500 uppercase mb-2">Services</h3>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="inline-block bg-accent-orange text-white px-3 py-1 rounded-full text-sm font-inter font-semibold"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project Image Placeholder */}
          <div className="mb-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl aspect-video flex items-center justify-center mb-12">
            <div className="text-center">
              <p className="text-gray-500 font-inter">Project Image/Gallery</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-12 border-t border-gray-200">
            <h3 className="text-2xl font-display font-bold text-black mb-4">
              Interested in a Similar Project?
            </h3>
            <Link
              href="/contact"
              className="inline-block bg-accent-orange text-white px-8 py-3 rounded-lg font-inter font-semibold hover:bg-orange-600 transition-colors duration-300"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-black mb-8">
            More Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(projectData)
              .filter(([key]) => key !== params.project)
              .slice(0, 2)
              .map(([key, proj]) => (
                <Link
                  key={key}
                  href={`/works/${key}`}
                  className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-accent-orange transition-all duration-300"
                >
                  <div className="bg-gray-100 rounded-lg aspect-video mb-4 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    <p className="text-gray-500 font-inter text-sm">{proj.category}</p>
                  </div>
                  <h3 className="text-lg font-display font-bold text-black group-hover:text-accent-orange transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-inter mt-2">{proj.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
