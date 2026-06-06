import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'solid' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 font-body font-medium rounded-pill transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  solid: 'bg-ink text-paper hover:bg-black',
  outline: 'bg-paper text-ink border border-ink hover:bg-ink hover:text-paper',
  ghost: 'bg-transparent text-ink hover:bg-ink/5',
}

const sizes: Record<Size, string> = {
  sm: 'text-xs px-4 py-2.5',
  md: 'text-sm px-6 py-3',
  lg: 'text-sm px-8 py-4',
}

interface BaseProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>
type AnchorProps = BaseProps & { href: string }

export default function Button(props: ButtonProps | AnchorProps) {
  const { variant = 'solid', size = 'md', className, children } = props
  const classes = cn(base, variants[variant], sizes[size], className)

  if ('href' in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    )
  }
  const rest = { ...props } as Record<string, unknown>
  delete rest.variant
  delete rest.size
  delete rest.className
  delete rest.children
  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
}
