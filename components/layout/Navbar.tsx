'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import { useWishlistStore } from '@/store/wishlist'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Collections', href: '/collections' },
  { label: 'Find Your Scent', href: '/quiz' },
  { label: 'Samples', href: '/discovery-kit' },
  { label: 'About', href: '/about' },
]

// Routes whose top of page is a full-bleed dark hero that sits directly under
// the navbar, where white nav ink reads correctly before scroll. Every other
// page wraps its hero in a top-padding strip of light page background, so the
// navbar overlays that light strip and needs dark ink to stay visible.
const DARK_HERO_ROUTES = ['/', '/collections']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const cartCount = useCartStore((s) => s.items.reduce((a, i) => a + i.qty, 0))
  const wishCount = useWishlistStore((s) => s.ids.length)
  const openCart = useCartStore((s) => s.openCart)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // White ink only over a dark hero before scrolling; otherwise dark ink so
  // the navbar is visible on light-background pages.
  const overDarkHero = DARK_HERO_ROUTES.includes(pathname)
  const inkColor = scrolled || !overDarkHero ? 'var(--charcoal)' : 'white'

  return (
    <>
      <nav
        className={cn(
          'fixed top-9 inset-x-0 z-50 h-[60px] md:h-[72px] flex items-center px-5 md:px-6 transition-all duration-300',
          scrolled ? 'bg-cream/90 backdrop-blur-md shadow-card' : 'bg-transparent'
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-2xl font-bold tracking-widest mr-auto"
          style={{ color: inkColor }}
        >
          MAZAH
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex gap-7 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-body text-sm tracking-wider uppercase transition-colors hover:text-gold-primary"
                style={{ color: inkColor }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3 md:gap-4 ml-auto">
          <button aria-label="Search" className="relative p-1 hidden sm:block">
            <Search size={20} style={{ color: inkColor }} />
          </button>
          <Link href="/quiz" aria-label="Saved / Find your scent" className="relative p-1">
            <Heart size={20} style={{ color: inkColor }} />
            {wishCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gold-primary text-white text-[10px] font-bold grid place-items-center">
                {wishCount}
              </span>
            )}
          </Link>
          <button onClick={openCart} aria-label="Cart" className="relative p-1">
            <ShoppingBag size={20} style={{ color: inkColor }} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gold-primary text-white text-[10px] font-bold grid place-items-center">
                {cartCount}
              </span>
            )}
          </button>
          {/* Sticky purchase path — always dark for contrast */}
          <Link
            href="/collections"
            className="hidden md:inline-flex items-center rounded-pill bg-charcoal text-cream px-5 py-2 font-body text-xs tracking-widest uppercase hover:bg-gold-primary transition-colors"
          >
            Shop Now
          </Link>
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Menu"
          >
            <Menu size={22} style={{ color: inkColor }} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[70] bg-charcoal/95 flex flex-col p-8">
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end mb-12"
            aria-label="Close menu"
          >
            <X size={28} className="text-cream" />
          </button>
          <ul className="flex flex-col gap-7">
            {[{ label: 'Home', href: '/' }, ...NAV_LINKS].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-display text-4xl text-cream hover:text-gold-light transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/collections"
            onClick={() => setMenuOpen(false)}
            className="mt-10 inline-flex items-center justify-center rounded-pill bg-gold-primary text-white px-6 py-3.5 font-body text-sm tracking-widest uppercase"
          >
            Shop Now
          </Link>
        </div>
      )}
    </>
  )
}
