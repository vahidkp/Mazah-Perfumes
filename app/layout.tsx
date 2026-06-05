import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, DM_Sans } from 'next/font/google'
import dynamic from 'next/dynamic'
import './globals.css'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// CartDrawer is client-only and excluded from the initial bundle.
const CartDrawer = dynamic(() => import('@/components/layout/CartDrawer'), {
  ssr: false,
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mazah Perfume — Elegance in Bloom',
  description:
    'Timeless luxury fragrances crafted with passion and elegance, designed to leave a lasting impression.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${dmSans.variable}`}
    >
      <body>
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  )
}
