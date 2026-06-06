'use client'
import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { ChevronDown, SlidersHorizontal, Search, Check } from 'lucide-react'
import { products } from '@/lib/data/products'
import { FAMILY, GENDER } from '@/lib/data/site'
import { cn } from '@/lib/utils'
import ProductCard from '@/components/ui/ProductCard'
import { DuoPromo, MembersPromo } from './PromoCards'
import type { Product } from '@/types'

const TABS = [
  { label: 'All Perfumes', params: {} },
  { label: 'Impressions', params: { c: 'impressions' } },
  { label: 'Originals', params: { c: 'originals' } },
  { label: 'Gift Sets', href: '/discovery-kit' },
  { label: 'Bestsellers', params: { tab: 'bestsellers' } },
  { label: 'New Arrivals', params: { tab: 'new' } },
]

const SORTS = [
  { key: 'featured', label: 'Featured' },
  { key: 'price-asc', label: 'Price: Low to High' },
  { key: 'price-desc', label: 'Price: High to Low' },
  { key: 'rating', label: 'Top Rated' },
  { key: 'reviews', label: 'Most Reviewed' },
]

const BRANDS = Array.from(
  new Set(products.map((p) => p.inspiredBy.brand))
).sort()

function Dropdown({
  label,
  value,
  options,
  onSelect,
}: {
  label: string
  value?: string
  options: { key: string; label: string }[]
  onSelect: (key: string | undefined) => void
}) {
  const [open, setOpen] = useState(false)
  const active = options.find((o) => o.key === value)
  return (
    <div
      className="relative"
      onMouseLeave={() => setOpen(false)}
      onKeyDown={(e) => {
        if (e.key === 'Escape') setOpen(false)
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cn(
          'flex items-center gap-1.5 text-sm py-1.5 transition-colors',
          active ? 'text-ink font-medium' : 'text-muted hover:text-ink'
        )}
      >
        {active ? active.label : label}
        <ChevronDown size={14} />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-30 mt-1 bg-paper border border-line rounded-card shadow-pop py-2 min-w-[180px]">
          <button
            onClick={() => {
              onSelect(undefined)
              setOpen(false)
            }}
            className="w-full text-left px-4 py-1.5 text-sm text-muted hover:bg-card flex items-center justify-between"
          >
            All {label}
            {!value && <Check size={14} />}
          </button>
          {options.map((o) => (
            <button
              key={o.key}
              onClick={() => {
                onSelect(o.key)
                setOpen(false)
              }}
              className="w-full text-left px-4 py-1.5 text-sm hover:bg-card flex items-center justify-between"
            >
              {o.label}
              {value === o.key && <Check size={14} />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function CollectionView() {
  const router = useRouter()
  const sp = useSearchParams()

  const collection = sp.get('c') ?? undefined
  const gender = sp.get('g') ?? undefined
  const family = sp.get('f') ?? undefined
  const brand = sp.get('b') ?? undefined
  const tab = sp.get('tab') ?? undefined
  const urlQ = sp.get('q') ?? ''

  const [search, setSearch] = useState(urlQ)
  const [sort, setSort] = useState('featured')
  const [visible, setVisible] = useState(12)
  const [mobileFilters, setMobileFilters] = useState(false)

  useEffect(() => setSearch(urlQ), [urlQ])

  // Persist the search query to the URL (debounced, replace = no history spam)
  // so it survives refresh and can be shared.
  useEffect(() => {
    const t = setTimeout(() => {
      const params = new URLSearchParams(Array.from(sp.entries()))
      const q = search.trim()
      if (q) params.set('q', q)
      else params.delete('q')
      if ((params.get('q') ?? '') !== (sp.get('q') ?? '')) {
        router.replace(
          `/collections${params.toString() ? `?${params}` : ''}`,
          { scroll: false }
        )
      }
    }, 350)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  // Build a new query string off the current params.
  const pushParam = (key: string, val: string | undefined) => {
    const params = new URLSearchParams(Array.from(sp.entries()))
    if (val) params.set(key, val)
    else params.delete(key)
    // collection and tab are mutually exclusive
    if (key === 'c' && val) params.delete('tab')
    if (key === 'tab' && val) params.delete('c')
    router.push(`/collections${params.toString() ? `?${params}` : ''}`)
  }

  const isTabActive = (t: (typeof TABS)[number]) => {
    if (t.href) return false
    const p = t.params ?? {}
    if ('c' in p) return collection === p.c && !tab
    if ('tab' in p) return tab === p.tab
    // All Perfumes
    return !collection && !tab && !gender && !family && !brand
  }

  const filtered = useMemo(() => {
    let list: Product[] = products
    if (collection) list = list.filter((p) => p.collection === collection)
    if (gender) list = list.filter((p) => p.gender === gender)
    if (family) list = list.filter((p) => p.family === family)
    if (brand) list = list.filter((p) => p.inspiredBy.brand === brand)
    if (tab === 'bestsellers')
      list = list.filter((p) => p.badges.includes('BESTSELLER'))
    if (tab === 'new') list = list.filter((p) => p.badges.includes('NEW'))
    const q = search.trim().toLowerCase()
    if (q)
      list = list.filter((p) =>
        [
          p.name,
          p.inspiredBy.brand,
          p.inspiredBy.scent,
          p.family,
          ...p.scentNotes.top,
          ...p.scentNotes.heart,
          ...p.scentNotes.base,
        ]
          .join(' ')
          .toLowerCase()
          .includes(q)
      )

    const sorted = [...list]
    const min = (p: Product) => Math.min(...p.sizes.map((s) => s.guest))
    if (sort === 'price-asc') sorted.sort((a, b) => min(a) - min(b))
    else if (sort === 'price-desc') sorted.sort((a, b) => min(b) - min(a))
    else if (sort === 'rating') sorted.sort((a, b) => b.rating - a.rating)
    else if (sort === 'reviews')
      sorted.sort((a, b) => b.reviewCount - a.reviewCount)
    return sorted
  }, [collection, gender, family, brand, tab, search, sort])

  useEffect(() => setVisible(12), [collection, gender, family, brand, tab, search])

  const defaultView =
    !collection && !gender && !family && !brand && !tab && !search.trim()
  const shown = filtered.slice(0, visible)

  // Compose grid cells with promo cards interleaved.
  const cells: React.ReactNode[] = []
  if (defaultView) cells.push(<DuoPromo key="duo" />)
  shown.forEach((p) => cells.push(<ProductCard key={p.id} product={p} />))
  const memberAt = Math.min(defaultView ? 8 : 7, cells.length)
  cells.splice(memberAt, 0, <MembersPromo key="members" />)

  const filterControls = (
    <>
      <Dropdown
        label="Gender"
        value={gender}
        onSelect={(v) => pushParam('g', v)}
        options={(Object.keys(GENDER) as (keyof typeof GENDER)[]).map((k) => ({
          key: k,
          label: GENDER[k],
        }))}
      />
      <Dropdown
        label="Scent family"
        value={family}
        onSelect={(v) => pushParam('f', v)}
        options={(Object.keys(FAMILY) as (keyof typeof FAMILY)[]).map((k) => ({
          key: k,
          label: FAMILY[k].label,
        }))}
      />
      <Dropdown
        label="Inspired-by Brands"
        value={brand}
        onSelect={(v) => pushParam('b', v)}
        options={BRANDS.map((b) => ({ key: b, label: b }))}
      />
      <Dropdown
        label="Collections"
        value={collection}
        onSelect={(v) => pushParam('c', v)}
        options={[
          { key: 'impressions', label: 'Impressions' },
          { key: 'originals', label: 'Originals' },
        ]}
      />
    </>
  )

  return (
    <div className="container-wide pt-6 pb-16">
      {/* Sub-nav tabs */}
      <div className="flex gap-5 sm:gap-7 overflow-x-auto no-scrollbar border-b border-line pb-px">
        {TABS.map((t) =>
          t.href ? (
            <Link
              key={t.label}
              href={t.href}
              className="shrink-0 pb-3 text-sm font-medium text-muted hover:text-ink whitespace-nowrap"
            >
              {t.label}
            </Link>
          ) : (
            <button
              key={t.label}
              onClick={() => {
                const p = t.params ?? {}
                const params = new URLSearchParams()
                if ('c' in p && p.c) params.set('c', p.c)
                if ('tab' in p && p.tab) params.set('tab', p.tab)
                router.push(
                  `/collections${params.toString() ? `?${params}` : ''}`
                )
              }}
              className={cn(
                'shrink-0 pb-3 text-sm whitespace-nowrap border-b-2 -mb-px transition-colors',
                isTabActive(t)
                  ? 'border-ink text-ink font-semibold'
                  : 'border-transparent text-muted hover:text-ink'
              )}
            >
              {t.label}
            </button>
          )
        )}
      </div>

      {/* Filter / sort bar */}
      <div className="flex items-center gap-4 mt-5 flex-wrap">
        <button
          onClick={() => setMobileFilters((v) => !v)}
          className="flex items-center gap-2 text-sm font-medium border border-line rounded-pill px-3.5 py-2 lg:hidden"
        >
          <SlidersHorizontal size={15} /> Sort &amp; Filter
        </button>

        {/* Search */}
        <div className="flex items-center gap-2 bg-card rounded-pill px-4 h-9 flex-1 min-w-[180px] max-w-md border border-line">
          <Search size={15} className="text-muted" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search scents, brands, ingredients"
            aria-label="Search scents, brands, ingredients"
            className="bg-transparent text-sm outline-none w-full"
          />
        </div>

        {/* Desktop dropdowns */}
        <div className="hidden lg:flex items-center gap-5">{filterControls}</div>

        <div className="ml-auto flex items-center gap-4">
          <div className="hidden sm:block">
            <Dropdown
              label="Sort"
              value={sort === 'featured' ? undefined : sort}
              onSelect={(v) => setSort(v ?? 'featured')}
              options={SORTS.filter((s) => s.key !== 'featured')}
            />
          </div>
          <span
            className="text-sm text-muted whitespace-nowrap"
            aria-live="polite"
            aria-atomic="true"
          >
            {filtered.length} Product{filtered.length === 1 ? '' : 's'}
          </span>
        </div>
      </div>

      {/* Mobile filter panel */}
      {mobileFilters && (
        <div className="lg:hidden mt-4 p-4 border border-line rounded-card flex flex-col gap-3">
          {filterControls}
          <Dropdown
            label="Sort"
            value={sort === 'featured' ? undefined : sort}
            onSelect={(v) => setSort(v ?? 'featured')}
            options={SORTS.filter((s) => s.key !== 'featured')}
          />
        </div>
      )}

      {/* Intro */}
      <p className="text-sm text-muted mt-5">
        Explore designer-inspired{' '}
        <Link href="/collections?c=impressions" className="text-coral underline underline-offset-2">
          Impressions
        </Link>{' '}
        and{' '}
        <Link href="/collections?c=originals" className="text-coral underline underline-offset-2">
          Mazah Originals
        </Link>{' '}
        perfumes, developed in France.
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="py-24 text-center">
          <p className="font-display text-xl font-bold">No perfumes found</p>
          <p className="text-sm text-muted mt-2">
            Try adjusting your filters or search.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
          {cells}
        </div>
      )}

      {/* Load more */}
      {visible < filtered.length && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setVisible((v) => v + 8)}
            className="btn-outline rounded-pill border-coral text-coral hover:bg-coral hover:text-paper px-16"
          >
            Load More Products
          </button>
        </div>
      )}
    </div>
  )
}
