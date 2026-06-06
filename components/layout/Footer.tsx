import Link from 'next/link'
import { Apple, Play } from 'lucide-react'
import {
  FOOTER_COLUMNS,
  SEO_FAMILIES,
  SEO_INSPIRED,
  COUNTRIES,
} from '@/lib/data/site'

const SOCIALS = [
  {
    label: 'Instagram',
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
    path: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
]

function SeoRow({ items }: { items: string[] }) {
  return (
    <div className="flex gap-x-7 overflow-x-auto no-scrollbar text-sm text-muted">
      {items.map((t) => {
        const inspired = t.match(/^Inspired by (.+)$/)
        return (
          <Link
            key={t}
            href="/collections"
            className="shrink-0 whitespace-nowrap hover:text-ink transition-colors"
          >
            {inspired ? (
              <>
                Inspired by{' '}
                <span className="font-bold underline underline-offset-2 text-ink">
                  {inspired[1]}
                </span>
              </>
            ) : (
              t
            )}
          </Link>
        )
      })}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-canvas border-t border-line">
      {/* SEO link rows */}
      <div className="container-wide py-8 space-y-3 border-b border-line">
        <SeoRow items={SEO_FAMILIES} />
        <SeoRow items={SEO_INSPIRED} />
      </div>

      {/* Main footer */}
      <div className="container-wide py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        {/* Newsletter + socials + country */}
        <div>
          <p className="font-display text-lg font-bold mb-3">Be the first to know.</p>
          <form className="flex max-w-sm">
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              className="flex-1 text-sm border border-line border-r-0 rounded-l-pill px-4 py-2.5 bg-paper outline-none focus:border-ink/40"
            />
            <button
              type="submit"
              className="bg-ink text-paper text-xs font-semibold uppercase tracking-wide rounded-r-pill px-5"
            >
              Submit
            </button>
          </form>

          <div className="flex items-center gap-5 mt-6">
            {SOCIALS.map((s) => (
              <a key={s.label} href="#" aria-label={s.label} className="hover:text-coral transition-colors">
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
                  {s.path}
                </svg>
              </a>
            ))}
            <span className="text-2xs font-semibold uppercase tracking-wide text-muted border border-line rounded px-2 py-1">
              🐰 Animal Test-Free
            </span>
          </div>

          <label
            htmlFor="footer-country"
            className="block font-display font-bold text-sm mt-8 mb-2"
          >
            Shop the following countries.
          </label>
          <select
            id="footer-country"
            className="w-full max-w-xs text-sm border border-line rounded-lg px-3 py-2.5 bg-paper outline-none focus:border-ink/40"
            defaultValue="United States"
          >
            {COUNTRIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Link columns */}
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="font-display font-bold text-sm mb-4">{col.title}</p>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted hover:text-ink transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            {col.title === 'More.' && (
              <div className="mt-6">
                <p className="font-display font-bold text-sm mb-3">
                  Download our app.
                </p>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="flex items-center gap-1.5 bg-ink text-paper rounded-lg px-3 py-2 text-xs"
                  >
                    <Apple size={16} /> App Store
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 bg-ink text-paper rounded-lg px-3 py-2 text-xs"
                  >
                    <Play size={16} /> Google Play
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-line">
        <div className="container-wide py-8">
          <p className="text-center font-display text-3xl font-extrabold lowercase tracking-tightest">
            mazah
          </p>
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-faint">
            <p>© 2026 Mazah Perfume. All Rights Reserved.</p>
            <div className="flex flex-wrap gap-5 justify-center">
              <Link href="#" className="hover:text-ink transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-ink transition-colors">Terms &amp; Conditions</Link>
              <Link href="#" className="hover:text-ink transition-colors">Cookie Policy</Link>
              <Link href="#" className="hover:text-ink transition-colors">Do Not Sell</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
