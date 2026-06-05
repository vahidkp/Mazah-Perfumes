import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Story — Mazah Perfume',
  description:
    'How Mazah crafts long-lasting luxury fragrances — small batches, rare botanicals, and no synthetic shortcuts.',
}

const VALUES = [
  {
    title: 'Sourced at the Origin',
    body: 'Rose from Grasse, frankincense from Oman, jasmine from Kannauj. We buy from the growers who do it best, and never substitute.',
  },
  {
    title: 'Blended In-House',
    body: 'Every formula is composed and matured in our own atelier — 6 months and 50+ trials before a single bottle is filled.',
  },
  {
    title: 'Made to Last',
    body: 'We formulate at extrait and eau-de-parfum strength so our scents wear 8–12 hours, not 8–12 minutes.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-[120px] md:pt-[140px]">
      {/* Hero */}
      <section className="bg-hero-gradient py-16 md:py-20 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 50% 70% at 50% 50%, rgba(255,255,255,0.12) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 px-6">
          <p className="font-body text-xs text-cream/70 uppercase tracking-[0.3em] mb-3">
            Our Story
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-white font-bold leading-tight max-w-3xl mx-auto">
            We stop when it’s right — <em className="font-normal">not when it’s ready</em>.
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/3] rounded-card overflow-hidden bg-gradient-to-b from-amber-100 to-amber-50">
          <Image
            src="/images/about-2.jpg"
            alt="Mazah ingredients"
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 50vw"
          />
        </div>
        <div>
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-5">
            A house built on <em>patience</em>
          </h2>
          <p className="font-body text-base text-muted leading-relaxed mb-4">
            Mazah began with a simple frustration: luxury fragrances that
            vanished within the hour. So we built a house around longevity and
            honesty — rare botanicals, generous concentrations, and the time it
            takes to get a blend exactly right.
          </p>
          <p className="font-body text-base text-muted leading-relaxed">
            Today, more than 10,000 wearers have helped us refine every formula
            before launch. The result is a small, considered collection meant to
            be worn — and remembered.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-amber-50/40 py-16 md:py-20">
        <div className="max-w-content mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal text-center mb-12">
            What makes a Mazah
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white rounded-card p-7 shadow-card">
                <span className="w-10 h-10 rounded-full bg-gold-primary/15 grid place-items-center mb-4">
                  <Check size={18} className="text-gold-primary" />
                </span>
                <h3 className="font-heading text-xl text-charcoal mb-2">
                  {v.title}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-20 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-charcoal font-bold mb-4">
          Find the one that’s <em className="font-normal">yours</em>
        </h2>
        <p className="font-body text-base text-muted mb-8 max-w-md mx-auto">
          Take the 30-second scent quiz, or sample the whole collection with our
          Discovery Kit.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center rounded-pill bg-gold-primary text-white px-8 py-3.5 font-body text-sm tracking-widest uppercase hover:bg-gold-muted transition-colors"
          >
            Find Your Scent
          </Link>
          <Link
            href="/collections"
            className="inline-flex items-center justify-center rounded-pill border border-charcoal/20 text-charcoal px-8 py-3.5 font-body text-sm tracking-widest uppercase hover:border-gold-primary hover:text-gold-primary transition-colors"
          >
            Shop Fragrances
          </Link>
        </div>
      </section>
    </div>
  )
}
