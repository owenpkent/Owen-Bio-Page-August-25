import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Owen P Kent - Filmmaker, Engineer, Advocate',
    template: '%s | Owen P Kent'
  },
  description: 'Creating tech, stories, and experiences that break barriers. Filmmaker, engineer, entrepreneur, and advocate building projects that prove disability does not equal disadvantage.',
  keywords: ['Owen P Kent', 'filmmaker', 'engineer', 'advocate', 'ATDev', 'OKStudio', 'Angels of Mercy', 'disability', 'assistive technology', 'aerial cinematography'],
  authors: [{ name: 'Owen P Kent' }],
  creator: 'Owen P Kent',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://owenpkent.com',
    title: 'Owen P Kent - Filmmaker, Engineer, Advocate',
    description: 'Creating tech, stories, and experiences that break barriers.',
    siteName: 'Owen P Kent',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Owen P Kent - Filmmaker, Engineer, Advocate',
    description: 'Creating tech, stories, and experiences that break barriers.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-body antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
