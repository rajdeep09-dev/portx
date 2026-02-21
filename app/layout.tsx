import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono, Clash_Display } from 'next/font/google'
import "./globals.css"

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono'
})

const clash = Clash_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-clash'
})

export const metadata: Metadata = {
  title: "Portx - Personal Portfolio & Agency",
  description: "Portx is a sleek and modern Framer template designed for creative professionals, freelancers, and agencies who want to showcase their work with style and impact.",
  generator: "Next.js",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portx.vercel.app",
    title: "Portx - Personal Portfolio & Agency",
    description: "Portx is a sleek and modern Framer template designed for creative professionals, freelancers, and agencies who want to showcase their work with style and impact.",
    siteName: "Portx"
  },
  twitter: {
    card: "summary_large_image",
    creator: "@portx"
  }
}

export const viewport: Viewport = {
  themeColor: "#000",
  colorScheme: "light",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrains.variable} ${clash.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000" />
      </head>
      <body className="font-inter">
        {children}
      </body>
    </html>
  )
}
