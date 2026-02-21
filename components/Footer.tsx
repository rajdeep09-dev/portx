import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-black text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-display font-bold mb-4">Portx</h3>
            <p className="text-gray-300 font-inter text-sm leading-relaxed max-w-sm">
              A sleek and modern Framer template designed for creative professionals, freelancers, and agencies.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-bold mb-4 font-inter">Services</h4>
            <ul className="space-y-2">
              {[
                { label: 'Animation', href: '/services/animation' },
                { label: 'Branding', href: '/services/branding' },
                { label: 'Framer', href: '/services/framer' },
                { label: 'UI/UX', href: '/services/ui-ux' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent-orange transition-colors duration-300 text-sm font-inter"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 font-inter">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Works', href: '/works' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent-orange transition-colors duration-300 text-sm font-inter"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm font-inter mb-4 md:mb-0">
            © {currentYear} Portx. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-orange transition-colors duration-300 text-sm font-inter"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-orange transition-colors duration-300 text-sm font-inter"
            >
              LinkedIn
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-orange transition-colors duration-300 text-sm font-inter"
            >
              Dribbble
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
