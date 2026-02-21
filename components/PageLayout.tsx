import Header from './Header'
import Footer from './Footer'

interface PageLayoutProps {
  children: React.ReactNode
  containerClassName?: string
}

export default function PageLayout({ children, containerClassName = '' }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className={`flex-grow ${containerClassName}`}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
