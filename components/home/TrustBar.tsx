import { Truck, Clock, Sparkles, RotateCcw, type LucideIcon } from 'lucide-react'

const ITEMS: { icon: LucideIcon; title: string; sub: string }[] = [
  { icon: Truck, title: 'Free Shipping', sub: 'On orders over $100' },
  { icon: Clock, title: '8–12 Hour Wear', sub: 'Long-lasting formulas' },
  { icon: Sparkles, title: 'Premium Ingredients', sub: 'Rare, ethically sourced' },
  { icon: RotateCcw, title: '30-Day Returns', sub: 'Shop with confidence' },
]

export default function TrustBar() {
  return (
    <section className="border-b border-charcoal/10 bg-cream">
      <div className="max-w-[280px] sm:max-w-content mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-5 py-8">
        {ITEMS.map(({ icon: Icon, title, sub }) => (
          <div
            key={title}
            className="flex items-center gap-3 justify-start sm:justify-center md:border-r md:last:border-r-0 border-charcoal/10"
          >
            <Icon size={22} className="text-gold-primary flex-shrink-0" />
            <div>
              <p className="font-body text-sm font-semibold text-charcoal leading-tight">
                {title}
              </p>
              <p className="font-body text-xs text-muted">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
