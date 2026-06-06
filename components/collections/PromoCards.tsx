import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/lib/data/products'

/** First-cell editorial promo featuring two bottles. */
export function DuoPromo() {
  const a = products.find((p) => p.slug === 'midnight-bloom')!
  const b = products.find((p) => p.slug === 'rose-noir')!
  return (
    <Link
      href="/collections?c=originals"
      className="group relative flex flex-col justify-between rounded-card overflow-hidden p-5 bg-card border border-line/60"
    >
      <div>
        <p className="font-display text-base font-bold tracking-tightest leading-tight">
          {a.name} &amp; {b.name}
        </p>
        <p className="text-xs text-muted mt-1">
          Inspired by {a.inspiredBy.brand} and {b.inspiredBy.brand}
        </p>
      </div>
      <div className="relative h-28 my-3">
        <Image src={a.images[0]} alt={a.name} fill className="object-contain blend-multiply -ml-6" />
        <Image src={b.images[0]} alt={b.name} fill className="object-contain blend-multiply ml-6" />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-wide bg-ink text-paper rounded-pill px-2 py-1">
          New
        </span>
        <span className="text-xs font-semibold underline underline-offset-4 group-hover:text-coral transition-colors">
          Shop Now
        </span>
      </div>
    </Link>
  )
}

/** Mazah+ members "Buy & save" tier card. */
export function MembersPromo() {
  const tiers = [
    ['Buy 1, 2 items', '10% OFF'],
    ['Buy 3 items', '20% OFF'],
    ['Buy 4 items', '25% OFF'],
    ['Buy 5+ items', '30% OFF + FREE PERFUME'],
  ]
  return (
    <div className="rounded-card overflow-hidden p-5 bg-card border border-line/60 flex flex-col">
      <p className="text-center text-[11px] font-semibold uppercase tracking-wide text-muted">
        <span className="text-coral font-display font-bold lowercase text-sm">mazah+</span>{' '}
        Members Only
      </p>
      <p className="text-center font-display text-2xl font-extrabold tracking-tightest mt-1">
        Buy &amp; <span className="text-coral">save</span>
      </p>
      <ul className="mt-4 space-y-2 text-xs">
        {tiers.map(([label, val]) => (
          <li key={label} className="flex justify-between gap-2 border-b border-line pb-2">
            <span className="text-muted">{label}</span>
            <span className="font-bold text-right">{val}</span>
          </li>
        ))}
      </ul>
      <p className="text-[10px] text-muted mt-3 text-center">
        Discount auto-applied with Mazah+ in cart.
      </p>
      <Link href="/discovery-kit" className="btn-solid w-full mt-4 !py-2.5 text-xs">
        Learn More
      </Link>
    </div>
  )
}
