import type { Metadata } from 'next'
import Image from 'next/image'
import { Check } from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About — Mazah',
  description:
    'The perfume house for the next generation. Premium-quality French fragrances — designer-inspired Impressions and Mazah Originals, crafted with heart, not ego.',
}

const VALUES = [
  {
    title: 'Crafted in France',
    body: 'Every fragrance is composed and bottled in France by master perfumers, using the same fine raw materials as the houses that inspire us.',
  },
  {
    title: 'No Excessive Markups',
    body: 'You pay for the perfume — not the marketing, the celebrity, or the gilded boutique. Designer-quality scent at an honest price.',
  },
  {
    title: 'Clean & Cruelty-Free',
    body: 'Vegan, cruelty-free, and made with clean ingredients. Beautiful fragrance you can feel good about wearing every day.',
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero banner */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            'linear-gradient(120deg, #5C7A93 0%, #7C99AE 50%, #9DB4C4 100%)',
        }}
      >
        <div className="container-wide py-20 md:py-28 text-paper">
          <p className="eyebrow !text-paper/70 mb-3">About Mazah</p>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tightest max-w-3xl leading-[1.03]">
            The perfume house for the next generation.
          </h1>
          <p className="text-paper/85 mt-5 max-w-xl">
            Premium-quality French fragrances. No excessive markups. Crafted with
            heart, not ego.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="container-wide py-16 md:py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/3] rounded-card overflow-hidden bg-card">
          <Image
            src="/images/about-2.jpg"
            alt="Mazah ingredients"
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 50vw"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tightest mb-5">
            A house built on <span className="font-normal">honesty</span>
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Mazah began with a simple frustration: the world&apos;s most beautiful
            fragrances came with the world&apos;s most absurd markups. So we built
            a house around access and integrity — the same French craftsmanship,
            without the gilded price tag.
          </p>
          <p className="text-muted leading-relaxed">
            Our Impressions reimagine the designer scents you love. Our Originals
            are exclusive compositions crafted in France. Either way, you get
            premium quality — and you keep your money.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-canvas py-16 md:py-20 border-y border-line">
        <div className="container-wide">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tightest text-center mb-12">
            What makes a Mazah
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-paper rounded-card p-7 border border-line">
                <span className="w-10 h-10 rounded-full bg-coral/10 grid place-items-center mb-4">
                  <Check size={18} className="text-coral" />
                </span>
                <h3 className="font-display text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-wide py-16 md:py-20 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tightest mb-4">
          Find the one that&apos;s <span className="font-normal">yours</span>
        </h2>
        <p className="text-muted mb-8 max-w-md mx-auto">
          Take the 30-second scent quiz, or sample the whole collection with our
          Discovery Kit.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/quiz" size="lg">Find Your Scent</Button>
          <Button href="/collections" variant="outline" size="lg">Shop All</Button>
        </div>
      </section>
    </div>
  )
}
