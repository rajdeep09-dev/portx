import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import "./globals.css"

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono'
})

const clash = localFont({
  src: [
    { path: '../public/fonts/ClashDisplay-Regular.woff2', weight: '400' },
    { path: '../public/fonts/ClashDisplay-Medium.woff2', weight: '500' },
    { path: '../public/fonts/ClashDisplay-Bold.woff2', weight: '600' },
    { path: '../public/fonts/ClashDisplay-Semibold.woff2', weight: '700' },
  ],
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
