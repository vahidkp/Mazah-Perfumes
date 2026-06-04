'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import { useWishlistStore } from '@/store/wishlist'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const cartCount = useCartStore((s) => s.items.reduce((a, i) => a + i.qty, 0))
  const wishCount = useWishlistStore((s) => s.ids.length)
  const openCart = useCartStore((s) => s.openCart)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const inkColor = scrolled ? 'var(--charcoal)' : 'white'

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 inset-x-0 z-50 h-[60px] md:h-[72px] flex items-center px-5 md:px-6 transition-all duration-300',
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
        <ul className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
          {['Collections', 'About', 'Stores'].map((link) => (
            <li key={link}>
              <Link
                href={link === 'Collections' ? '/collections' : `/${link.toLowerCase()}`}
                className="font-body text-sm tracking-wider uppercase transition-colors hover:text-gold-primary"
                style={{ color: inkColor }}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right icons */}
        <div className="flex items-center gap-4 ml-auto">
          <button aria-label="Search" className="relative p-1 hidden sm:block">
            <Search size={20} style={{ color: inkColor }} />
          </button>
          <button aria-label="Wishlist" className="relative p-1">
            <Heart size={20} style={{ color: inkColor }} />
            {wishCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gold-primary text-white text-[10px] font-bold grid place-items-center">
                {wishCount}
              </span>
            )}
          </button>
          <button onClick={openCart} aria-label="Cart" className="relative p-1">
            <ShoppingBag size={20} style={{ color: inkColor }} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gold-primary text-white text-[10px] font-bold grid place-items-center">
                {cartCount}
              </span>
            )}
          </button>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Menu"
          >
            <Menu size={22} style={{ color: inkColor }} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-charcoal/95 flex flex-col p-8">
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end mb-12"
            aria-label="Close menu"
          >
            <X size={28} className="text-cream" />
          </button>
          <ul className="flex flex-col gap-8">
            {['Home', 'Collections', 'About', 'Stores'].map((link) => (
              <li key={link}>
                <Link
                  href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  className="font-display text-4xl text-cream hover:text-gold-light transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
