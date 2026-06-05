import ScrollReveal from '@/components/ui/ScrollReveal'
import Image from 'next/image'
import { Truck, Sparkles, Clock, Globe, type LucideIcon } from 'lucide-react'

const LEFT_FEATURES = [
  {
    icon: Truck,
    title: 'Direct delivery to your door',
    body: 'Swift, secure shipping to over 120 countries worldwide.',
  },
  {
    icon: Clock,
    title: 'Long-Lasting Scents',
    body: 'Our formulas are crafted to linger beautifully for 8–12 hours.',
  },
]
const RIGHT_FEATURES = [
  {
    icon: Sparkles,
    title: 'Premium Ingredients',
    body: 'Rare botanicals and resins sourced from their native origins.',
  },
  {
    icon: Globe,
    title: 'Free Worldwide Delivery',
    body: 'Complimentary shipping on all orders over $100.',
  },
]

function Feature({
  icon: Icon,
  title,
  body,
  align = 'left',
}: {
  icon: LucideIcon
  title: string
  body: string
  align?: 'left' | 'right'
}) {
  return (
    <div
      className={`flex gap-4 items-start ${
        align === 'right' ? 'md:flex-row-reverse md:text-right' : ''
      }`}
    >
      <div className="w-10 h-10 rounded-full border border-gold-primary/30 grid place-items-center flex-shrink-0">
        <Icon size={18} className="text-gold-primary" />
      </div>
      <div>
        <p className="font-heading text-lg text-charcoal font-semibold leading-snug">
          {title}
        </p>
        <p className="font-body text-sm text-muted mt-1 leading-relaxed">
          {body}
        </p>
      </div>
    </div>
  )
}

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-24 bg-amber-50/40">
      <div className="max-w-content mx-auto px-6">
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-gold-primary mb-3">
            Why Mazah
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-charcoal">
            Scent <em>of Elegance</em>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-10 items-center">
          <ScrollReveal className="flex flex-col gap-10 order-2 md:order-1">
            {LEFT_FEATURES.map((f) => (
              <Feature key={f.title} {...f} align="right" />
            ))}
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="flex justify-center order-1 md:order-2">
            <div className="animate-float">
              <Image
                src="/images/feature-bottle.png"
                alt="Mazah perfume bottle"
                width={240}
                height={320}
                className="drop-shadow-2xl"
                sizes="240px"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="flex flex-col gap-10 order-3">
            {RIGHT_FEATURES.map((f) => (
              <Feature key={f.title} {...f} align="left" />
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
