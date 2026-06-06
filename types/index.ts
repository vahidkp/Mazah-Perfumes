export type Collection = 'impressions' | 'originals'
export type Gender = 'women' | 'men' | 'unisex'
export type Family =
  | 'warm'
  | 'flowery'
  | 'gourmand'
  | 'earthy'
  | 'fresh'
  | 'woody'

export interface Size {
  ml: number
  /** Guest (non-member) price */
  guest: number
  /** Member price (≈ 10% off guest) */
  member: number
}

export interface InspiredBy {
  /** Designer house, e.g. "YSL" */
  brand: string
  /** Original fragrance, e.g. "Libre" */
  scent: string
}

export interface MainNote {
  name: string
  /** Emoji used as the note glyph on the PDP */
  icon: string
}

export interface Product {
  id: string
  slug: string
  /** Two words; the UI renders the final word bold (Dossier style) */
  name: string
  tagline: string
  collection: Collection
  gender: Gender
  family: Family
  /** Legacy category, retained for filtering fallbacks */
  category: 'floral' | 'woody' | 'oriental' | 'fresh' | 'citrus'
  inspiredBy: InspiredBy
  /** Designer-original retail price, shown struck/parenthetical */
  retailPrice: number
  badges: Array<'NEW' | 'BESTSELLER' | 'LIMITED'>
  images: string[]
  /** Saturated hex used for colorful "latest drops" displays */
  cardColor: string
  /** Soft tint hex used behind grid cards */
  tint: string
  sizes: Size[]
  /** "This perfume is ___" */
  noteDescriptor: string
  mainNotes: MainNote[]
  scentNotes: { top: string[]; heart: string[]; base: string[] }
  topDesc: string
  middleDesc: string
  baseDesc: string
  attributes: { vegan: boolean; crueltyFree: boolean; clean: boolean }
  specs: {
    longevity: string
    sillage: string
    concentration: string
    season: string
    bestFor: string
  }
  /** Units remaining — drives scarcity messaging on LIMITED items */
  stock?: number
  description: string
  story: string
  ingredients: string
  rating: number
  reviewCount: number
  reviews: Review[]
  related: string[]
}

export interface Review {
  id: string
  author: string
  avatar?: string
  rating: number
  date: string
  verified?: boolean
  title?: string
  text: string
  /** Optional brand reply (Trustpilot-style) */
  reply?: string
}

export interface CartItem {
  productId: string
  name: string
  size: number
  price: number
  qty: number
  image: string
}
