import type { Product } from '@/types'

export const products: Product[] = [
  {
    id: '1',
    slug: 'midnight-bloom',
    name: 'Midnight Bloom',
    tagline: 'A floral bouquet that lingers into the night',
    category: 'floral',
    badges: ['BESTSELLER'],
    images: ['/images/midnight-bloom-1.svg', '/images/midnight-bloom-2.svg'],
    sizes: [
      { ml: 30, price: 69 },
      { ml: 50, price: 99 },
      { ml: 100, price: 149 },
    ],
    scentNotes: {
      top: ['Rose', 'Bergamot'],
      heart: ['Jasmine', 'Peony'],
      base: ['Musk', 'Sandalwood'],
    },
    description:
      'A timeless floral blend that opens with fresh rose petals and settles into a warm, musky embrace. Perfect for evenings that deserve something unforgettable.',
    story:
      'Inspired by a moonlit garden in full bloom, Midnight Bloom captures the lush, dewy petals just after dusk.',
    ingredients:
      'Alcohol Denat., Aqua, Parfum, Rosa Damascena, Jasminum Officinale, Santalum Album.',
    rating: 4.8,
    reviewCount: 142,
    reviews: [
      {
        id: 'r1',
        author: 'Aisha M.',
        rating: 5,
        date: '2025-03-14',
        text: 'Absolutely stunning fragrance. Lasts all day and I get compliments every time.',
      },
      {
        id: 'r2',
        author: 'Sara K.',
        rating: 5,
        date: '2025-02-28',
        text: 'The rose note is incredibly natural. Not too sweet, not too heavy. Perfect.',
      },
    ],
    related: ['ocean-whisper', 'amber-royale'],
  },
  {
    id: '2',
    slug: 'ocean-whisper',
    name: 'Ocean Whisper',
    tagline: 'Crisp marine notes with a warm amber heart',
    category: 'fresh',
    badges: ['NEW'],
    images: ['/images/ocean-whisper-1.svg', '/images/ocean-whisper-2.svg'],
    sizes: [
      { ml: 50, price: 89, originalPrice: 110 },
      { ml: 100, price: 139 },
    ],
    scentNotes: {
      top: ['Sea Salt', 'Lemon'],
      heart: ['Driftwood', 'Amber'],
      base: ['Vetiver', 'Cedarwood'],
    },
    description:
      'A breath of the open ocean — crisp, clean, and endlessly refreshing. The amber heart gives it unexpected depth and warmth.',
    story:
      'Bottled at the edge of the sea, where the horizon blurs between sky and water.',
    ingredients:
      'Alcohol Denat., Aqua, Parfum, Citrus Limon, Ambergris, Cedrus Atlantica.',
    rating: 4.6,
    reviewCount: 87,
    reviews: [
      {
        id: 'r3',
        author: 'Priya R.',
        rating: 4,
        date: '2025-04-01',
        text: 'Clean and fresh but with real character. My new daily driver.',
      },
    ],
    related: ['midnight-bloom', 'citrus-luxe'],
  },
  {
    id: '3',
    slug: 'amber-royale',
    name: 'Amber Royale',
    tagline: 'Rich oriental warmth with a golden glow',
    category: 'oriental',
    badges: ['BESTSELLER', 'LIMITED'],
    images: ['/images/amber-royale-1.svg', '/images/amber-royale-2.svg'],
    sizes: [
      { ml: 50, price: 129 },
      { ml: 100, price: 199 },
    ],
    scentNotes: {
      top: ['Saffron', 'Cardamom'],
      heart: ['Amber', 'Oud'],
      base: ['Vanilla', 'Patchouli'],
    },
    description:
      'Opulent and commanding. A rich oriental composition built on precious amber and rare oud, softened by sweet vanilla.',
    story:
      'Crafted for royalty — every drop of Amber Royale tells the story of ancient spice routes and golden palaces.',
    ingredients:
      'Alcohol Denat., Aqua, Parfum, Crocus Sativus, Elettaria Cardamomum, Aquilaria Malaccensis.',
    rating: 4.9,
    reviewCount: 214,
    reviews: [
      {
        id: 'r4',
        author: 'Lena B.',
        rating: 5,
        date: '2025-01-20',
        text: 'The most luxurious scent I have ever worn. Worth every penny.',
      },
    ],
    related: ['midnight-bloom', 'velvet-oud'],
  },
  {
    id: '4',
    slug: 'citrus-luxe',
    name: 'Citrus Luxe',
    tagline: 'Vibrant citrus with a sophisticated dry-down',
    category: 'citrus',
    badges: ['NEW'],
    images: ['/images/citrus-luxe-1.svg', '/images/citrus-luxe-2.svg'],
    sizes: [
      { ml: 30, price: 59 },
      { ml: 50, price: 85 },
    ],
    scentNotes: {
      top: ['Grapefruit', 'Neroli'],
      heart: ['White Tea', 'Iris'],
      base: ['Musk', 'Tonka Bean'],
    },
    description:
      'An electric opening of grapefruit and neroli that evolves into a serene white tea and iris heart. Light, uplifting, unmistakably refined.',
    story:
      'Born in the sun-drenched citrus groves of the Mediterranean coast.',
    ingredients:
      'Alcohol Denat., Aqua, Parfum, Citrus Paradisi, Citrus Aurantium, Iris Pallida.',
    rating: 4.5,
    reviewCount: 63,
    reviews: [],
    related: ['ocean-whisper', 'midnight-bloom'],
  },
  {
    id: '5',
    slug: 'velvet-oud',
    name: 'Velvet Oud',
    tagline: 'Smoky oud wrapped in soft suede',
    category: 'woody',
    badges: ['LIMITED'],
    images: ['/images/velvet-oud-1.svg', '/images/velvet-oud-2.svg'],
    sizes: [
      { ml: 50, price: 145 },
      { ml: 100, price: 215 },
    ],
    scentNotes: {
      top: ['Black Pepper', 'Bergamot'],
      heart: ['Oud', 'Suede'],
      base: ['Leather', 'Amberwood'],
    },
    description:
      'A deeply sensual woody fragrance where smoky oud meets the softness of suede. Bold, refined, and impossible to forget.',
    story:
      'A modern interpretation of an ancient ritual — oud burned in candlelit chambers of old.',
    ingredients:
      'Alcohol Denat., Aqua, Parfum, Aquilaria Malaccensis, Piper Nigrum, Cedrus Atlantica.',
    rating: 4.7,
    reviewCount: 98,
    reviews: [
      {
        id: 'r5',
        author: 'Omar D.',
        rating: 5,
        date: '2025-03-02',
        text: 'Incredibly rich and long lasting. A true signature scent.',
      },
    ],
    related: ['amber-royale', 'midnight-bloom'],
  },
  {
    id: '6',
    slug: 'rose-noir',
    name: 'Rose Noir',
    tagline: 'A dark, velvety rose with a spiced edge',
    category: 'floral',
    badges: ['BESTSELLER'],
    images: ['/images/rose-noir-1.svg', '/images/rose-noir-2.svg'],
    sizes: [
      { ml: 30, price: 75 },
      { ml: 50, price: 110 },
      { ml: 100, price: 160 },
    ],
    scentNotes: {
      top: ['Pink Pepper', 'Raspberry'],
      heart: ['Black Rose', 'Clove'],
      base: ['Patchouli', 'Vanilla'],
    },
    description:
      'A seductive, moody rose deepened with spice and a gourmand whisper of vanilla. Romance with an edge.',
    story:
      'Picked at midnight, the black rose holds a mystery that daylight blooms never could.',
    ingredients:
      'Alcohol Denat., Aqua, Parfum, Rosa Centifolia, Eugenia Caryophyllus, Pogostemon Cablin.',
    rating: 4.8,
    reviewCount: 156,
    reviews: [
      {
        id: 'r6',
        author: 'Nadia F.',
        rating: 5,
        date: '2025-02-11',
        text: 'Dark, sexy and unique. Nothing else in my collection smells like this.',
      },
    ],
    related: ['midnight-bloom', 'amber-royale'],
  },
  {
    id: '7',
    slug: 'golden-hour',
    name: 'Golden Hour',
    tagline: 'Warm, luminous amber kissed by sunlight',
    category: 'oriental',
    badges: ['NEW'],
    images: ['/images/golden-hour-1.svg', '/images/golden-hour-2.svg'],
    sizes: [
      { ml: 50, price: 105 },
      { ml: 100, price: 165 },
    ],
    scentNotes: {
      top: ['Mandarin', 'Honey'],
      heart: ['Amber', 'Orange Blossom'],
      base: ['Benzoin', 'Tonka Bean'],
    },
    description:
      'The scent of dusk in a bottle — golden amber and honeyed blossoms glowing against a warm, resinous base.',
    story:
      'Captured in the fleeting minutes when the sun melts into the horizon and everything turns to gold.',
    ingredients:
      'Alcohol Denat., Aqua, Parfum, Citrus Reticulata, Styrax Benzoin, Dipteryx Odorata.',
    rating: 4.6,
    reviewCount: 74,
    reviews: [],
    related: ['amber-royale', 'citrus-luxe'],
  },
  {
    id: '8',
    slug: 'white-orchid',
    name: 'White Orchid',
    tagline: 'Pure, airy florals with a creamy heart',
    category: 'fresh',
    badges: [],
    images: ['/images/white-orchid-1.svg', '/images/white-orchid-2.svg'],
    sizes: [
      { ml: 30, price: 65 },
      { ml: 50, price: 95 },
    ],
    scentNotes: {
      top: ['Pear', 'Freesia'],
      heart: ['White Orchid', 'Lily'],
      base: ['White Musk', 'Cashmere Wood'],
    },
    description:
      'Delicate and luminous — crisp pear and freesia open onto a creamy orchid heart resting on soft white musk.',
    story:
      'Inspired by a single orchid blooming in a glass conservatory at first light.',
    ingredients:
      'Alcohol Denat., Aqua, Parfum, Pyrus Communis, Freesia Refracta, Orchidaceae Extract.',
    rating: 4.4,
    reviewCount: 51,
    reviews: [],
    related: ['ocean-whisper', 'citrus-luxe'],
  },
]

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug)

export const getRelatedProducts = (slugs: string[]) =>
  products.filter((p) => slugs.includes(p.slug))

export const getProductsByCategory = (cat: string) =>
  cat === 'all' ? products : products.filter((p) => p.category === cat)
