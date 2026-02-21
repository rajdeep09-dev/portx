import type { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'

export const metadata: Metadata = {
  title: 'Portfolio - Portx',
  description: 'Explore our latest creative works and projects.',
}

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PageLayout>{children}</PageLayout>
}
