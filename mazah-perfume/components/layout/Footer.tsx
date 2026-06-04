import Link from 'next/link'
import { Camera, Music2, Pin } from 'lucide-react'

const LINKS = {
  Explore: ['Collections', 'About Us', 'Stores', 'Careers', 'Press'],
  Support: ['FAQ', 'Shipping', 'Returns', 'Contact'],
}

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80 pt-16 pb-8 border-t-2 border-gold-primary/40">
      <div className="max-w-content mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <p className="font-display text-3xl font-bold text-cream tracking-widest mb-4">
              MAZAH
            </p>
            <p className="font-body text-sm leading-relaxed mb-6 text-cream/60 max-w-xs">
              Timeless luxury fragrances crafted with passion, elegance, and
              rare ingredients sourced from around the globe.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gold-light transition-colors"
              >
                <Camera size={20} />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="hover:text-gold-light transition-colors"
              >
                <Music2 size={20} />
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="hover:text-gold-light transition-colors"
              >
                <Pin size={20} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([title, links]) => (
            <div key={title}>
              <p className="font-body text-xs uppercase tracking-widest text-gold-primary mb-5">
                {title}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="font-body text-sm text-cream/60 hover:text-cream transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/40">
          <p>© 2025 Mazah Perfume. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-cream/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-cream/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
