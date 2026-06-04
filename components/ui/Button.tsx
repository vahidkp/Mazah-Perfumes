import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'outline' | 'ghost' | 'dark'
  size?: 'sm' | 'md' | 'lg'
}

const variants = {
  gold: 'bg-gold-primary text-white hover:bg-gold-muted border border-gold-primary',
  outline:
    'bg-transparent text-gold-primary border border-gold-primary hover:bg-gold-primary hover:text-white',
  ghost:
    'bg-transparent text-charcoal border border-charcoal/20 hover:border-charcoal',
  dark: 'bg-charcoal text-cream border border-charcoal hover:bg-charcoal/80',
}
const sizes = {
  sm: 'px-5 py-2 text-xs tracking-widest',
  md: 'px-7 py-3 text-sm tracking-widest',
  lg: 'px-10 py-4 text-sm tracking-widest',
}

export default function Button({
  variant = 'gold',
  size = 'md',
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-pill font-body uppercase',
        'transition-all duration-300 cursor-pointer disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
