'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  User,
  ChevronDown,
  Sparkles,
} from 'lucide-react'
import { useCartStore } from '@/store/cart'
import { PERFUMES_MENU, ABOUT_MENU } from '@/lib/data/site'

// Shared "floating pill" surface — white, hairline border, soft shadow so it
// reads on both the cream hero and white inner-page backgrounds.
const PILL =
  'bg-white rounded-pill border border-black/[0.06] shadow-[0_2px_12px_rgba(20,20,20,0.08)]'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDrop, setOpenDrop] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const router = useRouter()
  const cartCount = useCartStore((s) => s.items.reduce((a, i) => a + i.qty, 0))
  const openCart = useCartStore((s) => s.openCart)

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(query ? `/collections?q=${encodeURIComponent(query)}` : '/collections')
  }

  return (
    <header className="sticky top-0 z-50">
      {/* ============ DESKTOP (lg+) — floating pills over the hero ============ */}
      <nav className="hidden lg:flex container-wide h-[72px] items-center gap-2.5">
        <Link
          href="/"
          className={`${PILL} inline-flex items-center h-11 px-5 font-display text-xl font-extrabold lowercase tracking-tightest text-ink`}
        >
          mazah
        </Link>

        <div className="flex items-center gap-2.5">
          <div className={`${PILL} flex items-center h-11 px-1.5`}>
            <div
              className="relative h-full"
              onMouseEnter={() => setOpenDrop('perfumes')}
              onMouseLeave={() => setOpenDrop(null)}
              onKeyDown={(e) => e.key === 'Escape' && setOpenDrop(null)}
            >
              <button
                onClick={() =>
                  setOpenDrop(openDrop === 'perfumes' ? null : 'perfumes')
                }
                aria-haspopup="menu"
                aria-expanded={openDrop === 'perfumes'}
                className="flex items-center gap-1 h-full px-3 text-[13px] uppercase tracking-[0.04em] font-medium hover:text-coral transition-colors"
              >
                Perfumes <ChevronDown size={13} />
              </button>
              {openDrop === 'perfumes' && (
                <div className="absolute left-0 top-full pt-3">
                  <div className="bg-paper border border-line rounded-card shadow-pop p-6 grid grid-cols-3 gap-8 w-[480px]">
                    {PERFUMES_MENU.map((col) => (
                      <div key={col.title}>
                        <p className="eyebrow mb-3">{col.title}</p>
                        <ul className="space-y-2">
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
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/discovery-kit"
              className="flex items-center gap-1 h-11 px-3 text-[13px] uppercase tracking-[0.04em] font-medium hover:text-coral transition-colors"
            >
              Home Scents <ChevronDown size={13} />
            </Link>
          </div>

          <Link
            href="/quiz"
            className={`${PILL} inline-flex items-center gap-2 h-11 px-4`}
          >
            <span
              className="grid place-items-center w-5 h-5 rounded-full"
              style={{ backgroundColor: '#F7DAE3' }}
            >
              <Sparkles size={12} style={{ color: '#E0719A' }} />
            </span>
            <span className="text-[13px] uppercase tracking-[0.04em] font-medium">
              AI Scent Finder
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-2.5 ml-auto">
          <form
            onSubmit={submitSearch}
            className={`${PILL} flex items-center h-11 pl-4 pr-1.5 w-52 lg:w-64`}
          >
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              aria-label="Search"
              className="bg-transparent text-sm outline-none w-full"
            />
            <button
              type="submit"
              aria-label="Search"
              className="shrink-0 w-8 h-8 rounded-full bg-coral grid place-items-center text-white hover:brightness-95 transition"
            >
              <Search size={15} />
            </button>
          </form>

          <div
            className="relative"
            onMouseEnter={() => setOpenDrop('about')}
            onMouseLeave={() => setOpenDrop(null)}
            onKeyDown={(e) => e.key === 'Escape' && setOpenDrop(null)}
          >
            <button
              onClick={() => setOpenDrop(openDrop === 'about' ? null : 'about')}
              aria-haspopup="menu"
              aria-expanded={openDrop === 'about'}
              className={`${PILL} flex items-center gap-1 h-11 px-4 text-[13px] uppercase tracking-[0.04em] font-medium hover:text-coral transition-colors`}
            >
              About <ChevronDown size={13} />
            </button>
            {openDrop === 'about' && (
              <div className="absolute right-0 top-full pt-3">
                <div className="bg-paper border border-line rounded-card shadow-pop p-4 w-44">
                  <ul className="space-y-2">
                    {ABOUT_MENU.map((l) => (
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
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            aria-label="Account"
            className={`${PILL} grid place-items-center w-11 h-11 text-ink hover:text-coral transition-colors`}
          >
            <User size={19} />
          </Link>

          <button
            onClick={openCart}
            aria-label="Cart"
            className={`${PILL} relative grid place-items-center w-11 h-11 text-ink hover:text-coral transition-colors`}
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-coral text-white text-[10px] font-bold leading-none grid place-items-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* ============ MOBILE (<lg) — solid white bar + centered logo pill ===== */}
      <div className="lg:hidden relative">
        <div className="container-wide h-16 flex items-center gap-2.5 bg-paper shadow-[0_2px_10px_rgba(20,20,20,0.05)]">
          {/* Coral hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="shrink-0 grid place-items-center w-11 h-11 rounded-2xl bg-coral text-white"
          >
            <Menu size={20} />
          </button>

          {/* Search bar */}
          <form
            onSubmit={submitSearch}
            className="flex-1 min-w-0 flex items-center h-11 pl-4 pr-1.5 rounded-pill bg-white border border-black/[0.07]"
          >
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              aria-label="Search"
              className="bg-transparent text-sm outline-none w-full"
            />
            <button
              type="submit"
              aria-label="Search"
              className="shrink-0 w-8 h-8 rounded-full bg-coral grid place-items-center text-white"
            >
              <Search size={15} />
            </button>
          </form>

          {/* Account */}
          <Link
            href="/about"
            aria-label="Account"
            className="shrink-0 grid place-items-center w-11 h-11 rounded-full bg-card text-ink"
          >
            <User size={18} />
          </Link>

          {/* Cart */}
          <button
            onClick={openCart}
            aria-label="Cart"
            className="shrink-0 relative grid place-items-center w-11 h-11 rounded-full bg-card text-ink"
          >
            <ShoppingBag size={19} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-coral text-white text-[10px] font-bold leading-none grid place-items-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Centered logo pill overlapping the hero / page top */}
        <Link
          href="/"
          className={`${PILL} absolute left-1/2 -translate-x-1/2 top-full mt-2 z-10 inline-flex items-center h-10 px-7 font-display text-lg font-extrabold lowercase tracking-tightest text-ink`}
        >
          mazah
        </Link>
      </div>

      {/* ============ Mobile drawer ============ */}
      {menuOpen && (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-[82%] max-w-xs bg-paper flex flex-col p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center bg-ink text-paper rounded-pill px-3.5 py-1.5 font-display text-lg font-extrabold lowercase tracking-tightest leading-none">
                mazah
              </span>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                submitSearch(e)
                setMenuOpen(false)
              }}
              className="flex items-center gap-2 bg-card rounded-pill px-4 h-10 mb-6 border border-line"
            >
              <Search size={16} className="text-muted" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search scents"
                aria-label="Search scents"
                className="bg-transparent text-sm outline-none w-full"
              />
            </form>
            <nav className="flex flex-col">
              {PERFUMES_MENU.flatMap((c) => c.links)
                .filter(
                  (l, i, arr) => arr.findIndex((x) => x.href === l.href) === i
                )
                .slice(0, 6)
                .map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-3 border-b border-line text-base font-medium"
                  >
                    {l.label}
                  </Link>
                ))}
              {ABOUT_MENU.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 border-b border-line text-base font-medium"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/collections"
              onClick={() => setMenuOpen(false)}
              className="btn-solid w-full mt-6"
            >
              Shop All
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
