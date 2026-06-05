import { Clock, Wind, FlaskConical, Snowflake, Sparkles, type LucideIcon } from 'lucide-react'
import type { Product } from '@/types'

export default function FragranceSpecs({ specs }: { specs: Product['specs'] }) {
  const rows: { icon: LucideIcon; label: string; value: string }[] = [
    { icon: Clock, label: 'Longevity', value: specs.longevity },
    { icon: Wind, label: 'Sillage', value: specs.sillage },
    { icon: FlaskConical, label: 'Concentration', value: specs.concentration },
    { icon: Snowflake, label: 'Season', value: specs.season },
    { icon: Sparkles, label: 'Best For', value: specs.bestFor },
  ]
  return (
    <div className="rounded-card border border-charcoal/10 bg-amber-50/40 p-5">
      <p className="font-body text-xs uppercase tracking-[0.2em] text-gold-primary mb-4">
        Fragrance Profile
      </p>
      <dl className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-4">
        {rows.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex flex-col gap-1">
            <dt className="flex items-center gap-1.5 font-body text-[11px] uppercase tracking-wider text-muted">
              <Icon size={13} className="text-gold-primary" />
              {label}
            </dt>
            <dd className="font-body text-sm text-charcoal font-medium leading-snug">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
