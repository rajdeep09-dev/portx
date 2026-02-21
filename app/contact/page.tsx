import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import PageLayout from '@/components/PageLayout'
import HeroSection from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Contact Us - Portx',
  description: 'Get in touch with Portx for creative design and development services.',
}

export default function ContactPage() {
  return (
    <PageLayout>
      <HeroSection
        title="Let's Work Together"
        subtitle="Contact Us"
        description="Have a project in mind? Get in touch and let's create something amazing."
      />
      <ContactForm />
    </PageLayout>
  )
}
