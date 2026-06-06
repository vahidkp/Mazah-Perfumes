import type { Metadata } from 'next'
import { Hanken_Grotesk, DM_Sans } from 'next/font/google'
import dynamic from 'next/dynamic'
import './globals.css'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// Client-only chrome excluded from the initial server bundle.
const CartDrawer = dynamic(() => import('@/components/layout/CartDrawer'), {
  ssr: false,
})
const PromoTab = dynamic(() => import('@/components/layout/PromoTab'), {
  ssr: false,
})

const display = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})
const body = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mazah — The Perfume House for the Next Generation',
  description:
    'Premium-quality fragrances crafted in France. Designer-inspired Impressions and Mazah Originals — no excessive markups, crafted with heart, not ego.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-paper">
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CartDrawer />
        <PromoTab />
      </body>
    </html>
  )
}
