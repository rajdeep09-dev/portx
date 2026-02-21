import type { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'

export const metadata: Metadata = {
  title: 'Services - Portx',
  description: 'Our creative services including animation, branding, Framer design, and UI/UX.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PageLayout>{children}</PageLayout>
}
