import type { Product, Review } from '@/types'

// Helper: build a list of verified reviews from compact tuples.
function reviews(
  prefix: string,
  rows: Array<[author: string, rating: number, date: string, text: string]>
): Review[] {
  return rows.map(([author, rating, date, text], i) => ({
    id: `${prefix}-r${i + 1}`,
    author,
    rating,
    date,
    verified: true,
    text,
  }))
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'midnight-bloom',
    name: 'Midnight Bloom',
    tagline: 'A floral bouquet that lingers into the night',
    category: 'floral',
    badges: ['BESTSELLER'],
    images: ['/images/midnight-bloom-1.png', '/images/midnight-bloom-2.png'],
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
    specs: {
      longevity: '8–10 hours',
      sillage: 'Moderate',
      concentration: 'Eau de Parfum',
      season: 'Spring · Autumn',
      bestFor: 'Evening · Date night',
    },
    description:
      'A timeless floral blend that opens with fresh rose petals and settles into a warm, musky embrace. Perfect for evenings that deserve something unforgettable.',
    story:
      'Midnight Bloom opens with dewy rose and bright bergamot — the scent of a garden caught just after dusk. As it warms on skin, jasmine and peony unfurl into a soft, powdery heart that feels intimate and alive. The dry-down is a quiet embrace of musk and sandalwood that lingers well past midnight. Made for the woman who wants to be remembered long after she leaves the room.',
    ingredients:
      'Alcohol Denat., Aqua, Parfum, Rosa Damascena, Jasminum Officinale, Santalum Album.',
    rating: 4.8,
    reviewCount: 142,
    reviews: reviews('mb', [
      ['Aisha M.', 5, '2025-03-14', 'Absolutely stunning fragrance. Lasts all day and I get compliments every time I wear it.'],
      ['Sara K.', 5, '2025-02-28', 'The rose note is incredibly natural. Not too sweet, not too heavy — perfectly balanced.'],
      ['Daniella P.', 5, '2025-02-10', 'My new signature scent. The dry-down is gorgeous and so romantic.'],
      ['Hana T.', 4, '2025-01-22', 'Beautiful and feminine. Sillage is moderate so I reapply once in the evening.'],
      ['Mariam Z.', 5, '2025-01-09', 'Smells like an expensive bouquet. Bottle looks luxurious on my vanity too.'],
      ['Leyla R.', 5, '2024-12-30', 'Bought it as a gift and ended up buying one for myself. That good.'],
    ]),
    related: ['rose-noir', 'amber-royale', 'ocean-whisper', 'white-orchid'],
  },
  {
    id: '2',
    slug: 'ocean-whisper',
    name: 'Ocean Whisper',
    tagline: 'Crisp marine notes with a warm amber heart',
    category: 'fresh',
    badges: ['NEW'],
    images: ['/images/ocean-whisper-1.png', '/images/ocean-whisper-2.png'],
    sizes: [
      { ml: 50, price: 89, originalPrice: 110 },
      { ml: 100, price: 139 },
    ],
    scentNotes: {
      top: ['Sea Salt', 'Lemon'],
      heart: ['Driftwood', 'Amber'],
      base: ['Vetiver', 'Cedarwood'],
    },
    specs: {
      longevity: '6–8 hours',
      sillage: 'Soft · Intimate',
      concentration: 'Eau de Parfum',
      season: 'Spring · Summer',
      bestFor: 'Daytime · Office',
    },
    description:
      'A breath of the open ocean — crisp, clean, and endlessly refreshing. The amber heart gives it unexpected depth and warmth.',
    story:
      'Ocean Whisper opens like a deep breath at the shoreline — sea salt and bright lemon, sharp and clean. A driftwood and amber heart rolls in slowly, lending unexpected warmth to all that freshness. It dries down to soft vetiver and cedar that stays close to the skin, like sun-warmed wood at the end of the day. Effortless, modern, and impossible to dislike.',
    ingredients:
      'Alcohol Denat., Aqua, Parfum, Citrus Limon, Ambergris, Cedrus Atlantica.',
    rating: 4.6,
    reviewCount: 87,
    reviews: reviews('ow', [
      ['Priya R.', 4, '2025-04-01', 'Clean and fresh but with real character. My new daily driver.'],
      ['Jonah B.', 5, '2025-03-18', 'Unisex done right. My partner keeps stealing it from me.'],
      ['Elif G.', 5, '2025-03-02', 'Perfect for the office — fresh, never overpowering. Lovely amber finish.'],
      ['Marco S.', 4, '2025-02-14', 'Great summer scent. Wish it lasted a touch longer but I love it.'],
      ['Nour A.', 5, '2025-01-27', 'Smells like a clean ocean breeze. So easy to wear every day.'],
      ['Tara V.', 5, '2025-01-11', 'Got so many compliments. The discount made it a no-brainer.'],
    ]),
    related: ['white-orchid', 'citrus-luxe', 'midnight-bloom', 'golden-hour'],
  },
  {
    id: '3',
    slug: 'amber-royale',
    name: 'Amber Royale',
    tagline: 'Rich oriental warmth with a golden glow',
    category: 'oriental',
    badges: ['BESTSELLER', 'LIMITED'],
    images: ['/images/amber-royale-2.png'],
    sizes: [
      { ml: 50, price: 89 },
      { ml: 100, price: 129 },
    ],
    scentNotes: {
      top: ['Saffron', 'Cardamom'],
      heart: ['Amber', 'Oud'],
      base: ['Vanilla', 'Patchouli'],
    },
    specs: {
      longevity: '10–12 hours',
      sillage: 'Strong · Projects',
      concentration: 'Extrait de Parfum',
      season: 'Autumn · Winter',
      bestFor: 'Evening · Special events',
    },
    description:
      'Opulent and commanding. A rich oriental composition built on precious amber and rare oud, softened by sweet vanilla.',
    story:
      'Amber Royale opens with a burst of saffron and cardamom — sharp, ceremonial, unmistakable. Within the hour it softens into rich oud and warm amber, settling finally into a skin-close vanilla that lasts well into the next morning. Made for evenings that deserve to be remembered.',
    ingredients:
      'Alcohol Denat., Aqua, Parfum, Crocus Sativus, Elettaria Cardamomum, Aquilaria Malaccensis.',
    rating: 4.9,
    reviewCount: 214,
    stock: 8,
    reviews: reviews('ar', [
      ['Lena B.', 5, '2025-01-20', 'The most luxurious scent I have ever worn. Worth every single penny.'],
      ['Omar D.', 5, '2025-03-09', 'Projection is unreal. One spray lasts me a full day and night.'],
      ['Sophia L.', 5, '2025-02-25', 'Rich, warm and expensive-smelling. My go-to for special occasions.'],
      ['Yusuf K.', 5, '2025-02-08', 'The saffron opening is incredible. This is a masterpiece.'],
      ['Camila F.', 4, '2025-01-30', 'Gorgeous but very strong — a little goes a long way. Stunning on skin.'],
      ['Aaliyah N.', 5, '2025-01-15', 'Compliment magnet. People stop me to ask what I am wearing.'],
      ['Daniel R.', 5, '2024-12-28', 'Bought the limited edition and so glad I did. Nothing else like it.'],
      ['Farah H.', 5, '2024-12-12', 'Warm, golden, addictive. The vanilla dry-down is to die for.'],
    ]),
    related: ['velvet-oud', 'golden-hour', 'rose-noir', 'midnight-bloom'],
  },
  {
    id: '4',
    slug: 'citrus-luxe',
    name: 'Citrus Luxe',
    tagline: 'Vibrant citrus with a sophisticated dry-down',
    category: 'citrus',
    badges: ['NEW'],
    images: ['/images/citrus-luxe-1.png'],
    sizes: [
      { ml: 30, price: 59 },
      { ml: 50, price: 85 },
    ],
    scentNotes: {
      top: ['Grapefruit', 'Neroli'],
      heart: ['White Tea', 'Iris'],
      base: ['Musk', 'Tonka Bean'],
    },
    specs: {
      longevity: '6–7 hours',
      sillage: 'Soft · Fresh',
      concentration: 'Eau de Parfum',
      season: 'Spring · Summer',
      bestFor: 'Daytime · Everyday',
    },
    description:
      'An electric opening of grapefruit and neroli that evolves into a serene white tea and iris heart. Light, uplifting, unmistakably refined.',
    story:
      'Citrus Luxe bursts open with juicy grapefruit and bright neroli — an instant lift, like sunlight on skin. It mellows into a calm white-tea and iris heart that feels polished and grown-up rather than sporty. A whisper of musk and tonka in the base keeps it soft and skin-close for hours. The everyday luxury that makes ordinary mornings feel considered.',
    ingredients:
      'Alcohol Denat., Aqua, Parfum, Citrus Paradisi, Citrus Aurantium, Iris Pallida.',
    rating: 4.5,
    reviewCount: 63,
    reviews: reviews('cl', [
      ['Isabella M.', 5, '2025-03-21', 'So fresh and uplifting. Perfect for warm mornings.'],
      ['Kenji T.', 4, '2025-03-05', 'Lovely citrus that does not turn sour. Refined and clean.'],
      ['Amara O.', 5, '2025-02-19', 'My summer staple. Light but still feels luxurious.'],
      ['Grace W.', 4, '2025-02-02', 'Great everyday scent. Wish it lasted a bit longer on me.'],
      ['Selin A.', 5, '2025-01-18', 'The neroli is beautiful. Such a happy fragrance.'],
      ['Lucas P.', 4, '2025-01-04', 'Clean, fresh and easy. Great value for the quality.'],
    ]),
    related: ['ocean-whisper', 'white-orchid', 'midnight-bloom', 'golden-hour'],
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
    specs: {
      longevity: '10–12 hours',
      sillage: 'Strong · Projects',
      concentration: 'Extrait de Parfum',
      season: 'Autumn · Winter',
      bestFor: 'Evening · Cold weather',
    },
    description:
      'A deeply sensual woody fragrance where smoky oud meets the softness of suede. Bold, refined, and impossible to forget.',
    story:
      'Velvet Oud opens with a spark of black pepper and bergamot before the smoke rolls in. At its heart, genuine oud meets supple suede — dark, refined, and quietly powerful. The base of leather and amberwood lingers like the memory of a candlelit room. A statement scent for those who would rather be unforgettable than agreeable.',
    ingredients:
      'Alcohol Denat., Aqua, Parfum, Aquilaria Malaccensis, Piper Nigrum, Cedrus Atlantica.',
    rating: 4.7,
    reviewCount: 98,
    stock: 5,
    reviews: reviews('vo', [
      ['Omar D.', 5, '2025-03-02', 'Incredibly rich and long lasting. A true signature scent.'],
      ['Victoria S.', 5, '2025-02-20', 'Smoky, leathery, gorgeous. Wears beautifully in cold weather.'],
      ['Idris B.', 5, '2025-02-04', 'Real oud quality at this price is rare. Absolutely love it.'],
      ['Helena K.', 4, '2025-01-19', 'Very bold — start with one spray. Stunning depth.'],
      ['Rashid A.', 5, '2025-01-06', 'Lasts more than 12 hours on me. Endless compliments.'],
      ['Maya L.', 5, '2024-12-21', 'Unisex and unforgettable. The suede note is heavenly.'],
    ]),
    related: ['amber-royale', 'golden-hour', 'rose-noir', 'midnight-bloom'],
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
    specs: {
      longevity: '8–10 hours',
      sillage: 'Moderate · Sensual',
      concentration: 'Eau de Parfum',
      season: 'Autumn · Winter',
      bestFor: 'Evening · Date night',
    },
    description:
      'A seductive, moody rose deepened with spice and a gourmand whisper of vanilla. Romance with an edge.',
    story:
      'Rose Noir opens with pink pepper and tart raspberry — a rose that bites back. Its heart is a brooding black rose laced with clove, equal parts elegant and dangerous. Patchouli and vanilla pull it into a warm, gourmand dry-down that clings to skin and clothing. For the moments when soft and pretty simply will not do.',
    ingredients:
      'Alcohol Denat., Aqua, Parfum, Rosa Centifolia, Eugenia Caryophyllus, Pogostemon Cablin.',
    rating: 4.8,
    reviewCount: 156,
    reviews: reviews('rn', [
      ['Nadia F.', 5, '2025-02-11', 'Dark, sexy and unique. Nothing else in my collection smells like this.'],
      ['Chloe D.', 5, '2025-03-12', 'A grown-up rose. The spice keeps it from ever being sweet.'],
      ['Sofia R.', 5, '2025-02-27', 'My most complimented perfume by far. Pure seduction.'],
      ['Bilal H.', 4, '2025-02-09', 'Bought for my wife, she adores it. Lasts all evening.'],
      ['Emma J.', 5, '2025-01-24', 'The raspberry-rose opening is addictive. Worth every penny.'],
      ['Zara K.', 5, '2025-01-07', 'Moody and romantic. Perfect for winter nights out.'],
    ]),
    related: ['midnight-bloom', 'amber-royale', 'velvet-oud', 'white-orchid'],
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
    specs: {
      longevity: '8–10 hours',
      sillage: 'Moderate · Warm',
      concentration: 'Eau de Parfum',
      season: 'Autumn · Winter',
      bestFor: 'Evening · Everyday luxury',
    },
    description:
      'The scent of dusk in a bottle — golden amber and honeyed blossoms glowing against a warm, resinous base.',
    story:
      'Golden Hour opens with sun-ripened mandarin and a drizzle of honey — bright, warm, and welcoming. Amber and orange blossom bloom at its heart, glowing like the last light of the day. Benzoin and tonka settle into a soft, resinous warmth that feels like a cashmere wrap. The everyday amber that turns any moment golden.',
    ingredients:
      'Alcohol Denat., Aqua, Parfum, Citrus Reticulata, Styrax Benzoin, Dipteryx Odorata.',
    rating: 4.6,
    reviewCount: 74,
    reviews: reviews('gh', [
      ['Ines V.', 5, '2025-03-16', 'Warm and cozy without being heavy. I wear it constantly.'],
      ['Theo M.', 4, '2025-03-01', 'Lovely honeyed amber. Great for autumn evenings.'],
      ['Layla S.', 5, '2025-02-15', 'Smells like a golden sunset. So comforting and pretty.'],
      ['Noah B.', 4, '2025-01-29', 'Soft and sweet but grown-up. Nice projection.'],
      ['Aria P.', 5, '2025-01-12', 'My winter comfort scent. The tonka base is gorgeous.'],
      ['Hugo L.', 5, '2024-12-23', 'Approachable amber that everyone loves. Highly recommend.'],
    ]),
    related: ['amber-royale', 'velvet-oud', 'citrus-luxe', 'midnight-bloom'],
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
    specs: {
      longevity: '6–8 hours',
      sillage: 'Soft · Intimate',
      concentration: 'Eau de Parfum',
      season: 'Spring · Summer',
      bestFor: 'Daytime · Office',
    },
    description:
      'Delicate and luminous — crisp pear and freesia open onto a creamy orchid heart resting on soft white musk.',
    story:
      'White Orchid opens with crisp pear and airy freesia — fresh, dewy, and luminous. A creamy white orchid and lily heart lends a soft, refined elegance that never tips into powdery. White musk and cashmere wood close it with a clean, second-skin warmth. The quiet sophistication of a perfectly tailored white shirt.',
    ingredients:
      'Alcohol Denat., Aqua, Parfum, Pyrus Communis, Freesia Refracta, Orchidaceae Extract.',
    rating: 4.4,
    reviewCount: 51,
    reviews: reviews('wo', [
      ['Mei L.', 5, '2025-03-08', 'So clean and elegant. My everyday office scent.'],
      ['Hannah G.', 4, '2025-02-22', 'Soft and pretty. Great for people who dislike strong perfume.'],
      ['Olivia C.', 5, '2025-02-06', 'The orchid is creamy and beautiful. Effortlessly chic.'],
      ['Ravi N.', 4, '2025-01-20', 'Light and fresh, perfect for work. Lovely on my partner.'],
      ['Beatriz F.', 5, '2025-01-05', 'Like a freshly laundered, luxurious version of myself.'],
      ['Yara D.', 4, '2024-12-19', 'Subtle but refined. A safe, classy daily wear.'],
    ]),
    related: ['ocean-whisper', 'citrus-luxe', 'midnight-bloom', 'golden-hour'],
  },
]

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug)

export const getRelatedProducts = (slugs: string[]) =>
  slugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => Boolean(p))

export const getProductsByCategory = (cat: string) =>
  cat === 'all' ? products : products.filter((p) => p.category === cat)

export const bestSellers = products.filter((p) => p.badges.includes('BESTSELLER'))
