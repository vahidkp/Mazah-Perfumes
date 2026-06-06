import type { Family, Gender } from '@/types'

export const BRAND = 'mazah'
export const BRAND_TITLE = 'Mazah'

/** Scent-family display labels + tag background colors (Tailwind tag.* tokens). */
export const FAMILY: Record<
  Family,
  { label: string; color: string; text: string }
> = {
  warm: { label: 'Warm', color: '#F3C76B', text: '#5b430f' },
  flowery: { label: 'Flowery', color: '#F4C7D2', text: '#73324a' },
  gourmand: { label: 'Gourmand', color: '#F2C29A', text: '#7a431c' },
  earthy: { label: 'Earthy', color: '#CBD8AC', text: '#42501f' },
  fresh: { label: 'Fresh', color: '#BBD7E0', text: '#1f4a55' },
  woody: { label: 'Woody', color: '#D8C3A6', text: '#5a4525' },
}

export const GENDER: Record<Gender, string> = {
  women: 'Women',
  men: 'Men',
  unisex: 'Unisex',
}

/** Top announcement bar rotating messages. */
export const ANNOUNCEMENTS = [
  { text: 'Free 3ml samples with Mazah+', cta: 'Learn more', href: '/about' },
  {
    text: 'Mazah+ Member: Up to 30% OFF + FREE shipping + FREE perfume',
    cta: '',
    href: '/collections',
  },
]

/** Primary nav: collection sub-nav tabs. */
export const COLLECTION_TABS = [
  { label: 'All Perfumes', href: '/collections' },
  { label: 'Impressions', href: '/collections?c=impressions' },
  { label: 'Originals', href: '/collections?c=originals' },
  { label: 'Gift Sets', href: '/discovery-kit' },
  { label: 'Bestsellers', href: '/collections?tab=bestsellers' },
  { label: 'New Arrivals', href: '/collections?tab=new' },
]

/** PERFUMES mega-dropdown columns. */
export const PERFUMES_MENU = [
  {
    title: 'Shop',
    links: [
      { label: 'All Perfumes', href: '/collections' },
      { label: 'Impressions', href: '/collections?c=impressions' },
      { label: 'Originals', href: '/collections?c=originals' },
      { label: 'Bestsellers', href: '/collections?tab=bestsellers' },
      { label: 'New Arrivals', href: '/collections?tab=new' },
    ],
  },
  {
    title: 'By Gender',
    links: [
      { label: 'Women', href: '/collections?g=women' },
      { label: 'Men', href: '/collections?g=men' },
      { label: 'Unisex', href: '/collections?g=unisex' },
    ],
  },
  {
    title: 'By Family',
    links: [
      { label: 'Warm', href: '/collections?f=warm' },
      { label: 'Flowery', href: '/collections?f=flowery' },
      { label: 'Fresh', href: '/collections?f=fresh' },
      { label: 'Woody', href: '/collections?f=woody' },
    ],
  },
]

export const ABOUT_MENU = [
  { label: 'About Us', href: '/about' },
  { label: 'Scent Quiz', href: '/quiz' },
  { label: 'Discovery Kit', href: '/discovery-kit' },
]

/** Footer SEO link rows. */
export const SEO_FAMILIES = [
  'Vanilla Perfume',
  'Jasmine Perfume',
  'Rose Perfume',
  'Amber Perfume',
  'Lavender Perfume',
  'Oud Perfume',
  'Sandalwood Perfume',
  'Musk Perfume',
  'Sweet Perfume',
  'Patchouli Perfume',
]

export const SEO_INSPIRED = [
  "Inspired by Baccarat Rouge 540",
  'Inspired by Coco Mademoiselle',
  'Inspired by Sauvage',
  'Inspired by Good Girl',
  'Inspired by Oud Wood',
  'Inspired by Portrait of a Lady',
  'Inspired by Daisy',
]

export const FOOTER_COLUMNS = [
  {
    title: 'Discover.',
    links: [
      { label: 'Scent Quiz', href: '/quiz' },
      { label: 'Blog', href: '/about' },
      { label: 'Scent Family', href: '/collections' },
      { label: 'Layering', href: '/about' },
      { label: 'Discovery Kit', href: '/discovery-kit' },
    ],
  },
  {
    title: 'Help.',
    links: [
      { label: 'Contact Us', href: '/about' },
      { label: 'Returns', href: '/about' },
      { label: 'FAQ', href: '/about' },
      { label: 'Testimonials', href: '/about' },
      { label: 'Accessibility', href: '/about' },
    ],
  },
  {
    title: 'More.',
    links: [
      { label: 'Store Locator', href: '/about' },
      { label: 'Boutique', href: '/about' },
      { label: 'Refer A Friend', href: '/about' },
      { label: 'Index', href: '/collections' },
    ],
  },
]

export const COUNTRIES = [
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
  'France',
]
