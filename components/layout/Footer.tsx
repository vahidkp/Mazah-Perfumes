import Link from 'next/link'

const LINKS = {
  Explore: ['Collections', 'About Us', 'Stores', 'Careers', 'Press'],
  Support: ['FAQ', 'Shipping', 'Returns', 'Contact'],
}

const SOCIALS = [
  {
    label: 'Instagram',
    href: '#',
    path: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    label: 'TikTok',
    href: '#',
    path: (
      <path
        d="M16 8.245a4.94 4.94 0 0 1-2.89-.928v6.45a4.515 4.515 0 1 1-3.9-4.476v2.317a2.22 2.22 0 1 0 1.555 2.118V2h2.345a2.89 2.89 0 0 0 2.89 2.89z"
        fill="currentColor"
        stroke="none"
      />
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    path: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
]

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
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="hover:text-gold-light transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {social.path}
                  </svg>
                </a>
              ))}
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
