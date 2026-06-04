import { cn } from '@/lib/utils'

const styles = {
  NEW: 'bg-gold-primary text-white',
  BESTSELLER: 'bg-charcoal text-cream',
  LIMITED: 'bg-red-600 text-white',
}

export default function Badge({
  variant,
}: {
  variant: 'NEW' | 'BESTSELLER' | 'LIMITED'
}) {
  return (
    <span
      className={cn(
        'text-[9px] font-body font-semibold tracking-widest uppercase px-2 py-0.5 rounded',
        styles[variant]
      )}
    >
      {variant}
    </span>
  )
}
