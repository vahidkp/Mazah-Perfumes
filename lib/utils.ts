import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

/** "$29" for whole numbers, "$29.50" otherwise. Used for guest prices. */
export const price = (n: number): string =>
  `$${Number.isInteger(n) ? n : n.toFixed(2)}`

/** Always two decimals, e.g. "$26.10". Used for member prices. */
export const priceFixed = (n: number): string => `$${n.toFixed(2)}`

/** True when a hex color is light enough to need dark text/controls on top. */
export function isLightHex(hex: string): boolean {
  const h = hex.replace('#', '')
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.62
}

/** Split a two-word name so the UI can bold the final word (Dossier style). */
export function nameParts(name: string): { lead: string; last: string } {
  const parts = name.trim().split(/\s+/)
  const last = parts.pop() ?? ''
  return { lead: parts.join(' '), last }
}
