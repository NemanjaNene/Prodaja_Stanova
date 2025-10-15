import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Premium Residence | Luksuzni Stanovi',
  description: 'Otkrijte vrhunski luksuz u srcu grada. Ekskluzivni stanovi sa modernim dizajnom, virtuelnim turama i nezaboravnim pogledom.',
  keywords: 'luksuzni stanovi, prodaja stanova, premium nekretnine, novi stanovi, virtuelna tura',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sr">
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

