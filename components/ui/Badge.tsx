import { cn } from '@/lib/utils'

const styles: Record<string, string> = {
  NEW: 'bg-ink text-paper',
  BESTSELLER: 'bg-ink text-paper',
  LIMITED: 'bg-coral text-paper',
}

interface Props {
  variant?: 'NEW' | 'BESTSELLER' | 'LIMITED'
  children?: React.ReactNode
  className?: string
  /** Custom background/text colors (e.g. family or gender tags). */
  color?: string
  textColor?: string
}

export default function Badge({
  variant,
  children,
  className,
  color,
  textColor,
}: Props) {
  const label = children ?? variant
  return (
    <span
      className={cn(
        'inline-block text-[10px] font-body font-semibold tracking-[0.08em] uppercase px-2.5 py-1 rounded-pill leading-none',
        variant && !color ? styles[variant] : 'bg-card text-ink',
        className
      )}
      style={color ? { backgroundColor: color, color: textColor } : undefined}
    >
      {label}
    </span>
  )
}
