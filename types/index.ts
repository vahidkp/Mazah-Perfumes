export interface Product {
  id: string
  slug: string
  name: string
  tagline: string
  category: 'floral' | 'woody' | 'oriental' | 'fresh' | 'citrus'
  badges: Array<'NEW' | 'BESTSELLER' | 'LIMITED'>
  images: string[]
  sizes: Array<{ ml: number; price: number; originalPrice?: number }>
  scentNotes: { top: string[]; heart: string[]; base: string[] }
  /** Structured fragrance "nutrition label" shown on the PDP. */
  specs: {
    longevity: string
    sillage: string
    concentration: string
    season: string
    bestFor: string
  }
  /** Units remaining — drives scarcity messaging on LIMITED items. */
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
  text: string
}

export interface CartItem {
  productId: string
  name: string
  size: number
  price: number
  qty: number
  image: string
}
