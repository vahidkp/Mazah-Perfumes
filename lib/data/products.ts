import type { Product, Review, Size } from '@/types'

/** Build a size with member price auto-derived (10% off, 2dp). */
function sz(ml: number, guest: number): Size {
  return { ml, guest, member: Math.round(guest * 0.9 * 100) / 100 }
}

/** Build verified reviews from compact tuples. */
function reviews(
  prefix: string,
  rows: Array<
    [author: string, rating: number, date: string, title: string, text: string, reply?: string]
  >
): Review[] {
  return rows.map(([author, rating, date, title, text, reply], i) => ({
    id: `${prefix}-r${i + 1}`,
    author,
    rating,
    date,
    title,
    verified: true,
    text,
    reply,
  }))
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'midnight-bloom',
    name: 'Midnight Bloom',
    tagline: 'A floral bouquet that lingers into the night',
    collection: 'impressions',
    gender: 'women',
    family: 'flowery',
    category: 'floral',
    inspiredBy: { brand: 'Chanel', scent: 'Coco Mademoiselle' },
    retailPrice: 145,
    badges: ['BESTSELLER'],
    images: ['/images/bottle-midnight-bloom.png'],
    cardColor: '#A8567E',
    tint: '#F6E7EC',
    sizes: [sz(50, 29), sz(100, 49)],
    noteDescriptor: 'A modern floral with a sensual heart',
    mainNotes: [
      { name: 'Rose', icon: '🌹' },
      { name: 'Jasmine', icon: '🌼' },
      { name: 'Peony', icon: '🌸' },
      { name: 'Musk', icon: '☁️' },
    ],
    scentNotes: {
      top: ['Rose', 'Bergamot'],
      heart: ['Jasmine', 'Peony'],
      base: ['Musk', 'Sandalwood'],
    },
    topDesc: 'The first notes you smell — dewy rose and bright bergamot.',
    middleDesc: 'The heart of the perfume — jasmine and soft peony.',
    baseDesc: 'The notes that linger all day — musk and sandalwood.',
    attributes: { vegan: true, crueltyFree: true, clean: true },
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
      'Midnight Bloom opens with dewy rose and bright bergamot — the scent of a garden caught just after dusk. As it warms on skin, jasmine and peony unfurl into a soft, powdery heart that feels intimate and alive. The dry-down is a quiet embrace of musk and sandalwood that lingers well past midnight.',
    ingredients:
      'Alcohol Denat., Aqua/Water, Parfum/Fragrance, Limonene, Linalool, Citronellol, Geraniol, Rosa Damascena Flower Oil, Jasminum Officinale, Benzyl Salicylate, Citral.',
    rating: 4.8,
    reviewCount: 142,
    reviews: reviews('mb', [
      ['Aisha M.', 5, '2025-03-14', 'My new signature', 'Absolutely stunning fragrance. Lasts all day and I get compliments every time I wear it.', 'Thank you Aisha! We are so happy Midnight Bloom became your signature scent. 💛'],
      ['Sara K.', 5, '2025-02-28', 'Perfectly balanced', 'The rose note is incredibly natural. Not too sweet, not too heavy — perfectly balanced.'],
      ['Daniella P.', 5, '2025-02-10', 'So romantic', 'The dry-down is gorgeous and so romantic. Smells far more expensive than it is.'],
      ['Hana T.', 4, '2025-01-22', 'Beautiful & feminine', 'Beautiful and feminine. Sillage is moderate so I reapply once in the evening.'],
      ['Mariam Z.', 5, '2025-01-09', 'Looks luxurious too', 'Smells like an expensive bouquet. Bottle looks luxurious on my vanity.'],
    ]),
    related: ['rose-noir', 'golden-hour', 'white-orchid', 'amber-royale'],
  },
  {
    id: '2',
    slug: 'ocean-whisper',
    name: 'Ocean Whisper',
    tagline: 'Crisp marine notes with a warm amber heart',
    collection: 'impressions',
    gender: 'unisex',
    family: 'fresh',
    category: 'fresh',
    inspiredBy: { brand: 'Dior', scent: 'Sauvage' },
    retailPrice: 160,
    badges: ['NEW'],
    images: ['/images/ocean-whisper-1.png', '/images/ocean-whisper-2.png'],
    cardColor: '#CBD3D7',
    tint: '#E3EEEF',
    sizes: [sz(50, 39), sz(100, 59)],
    noteDescriptor: 'A fresh, breezy escape to the shoreline',
    mainNotes: [
      { name: 'Sea Salt', icon: '🌊' },
      { name: 'Lemon', icon: '🍋' },
      { name: 'Amber', icon: '🟠' },
      { name: 'Cedar', icon: '🌲' },
    ],
    scentNotes: {
      top: ['Sea Salt', 'Lemon'],
      heart: ['Driftwood', 'Amber'],
      base: ['Vetiver', 'Cedarwood'],
    },
    topDesc: 'The first notes you smell — sea salt and bright lemon.',
    middleDesc: 'The heart of the perfume — driftwood and warm amber.',
    baseDesc: 'The notes that linger all day — vetiver and cedarwood.',
    attributes: { vegan: true, crueltyFree: true, clean: true },
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
      'Ocean Whisper opens like a deep breath at the shoreline — sea salt and bright lemon, sharp and clean. A driftwood and amber heart rolls in slowly, lending unexpected warmth to all that freshness. It dries down to soft vetiver and cedar that stays close to the skin.',
    ingredients:
      'Alcohol Denat., Aqua/Water, Parfum/Fragrance, Limonene, Citrus Limon Peel Oil, Ambergris, Cedrus Atlantica Wood Oil, Vetiveria Zizanoides, Linalool.',
    rating: 4.6,
    reviewCount: 87,
    reviews: reviews('ow', [
      ['Priya R.', 4, '2025-04-01', 'My daily driver', 'Clean and fresh but with real character. My new daily driver.'],
      ['Jonah B.', 5, '2025-03-18', 'Unisex done right', 'Unisex done right. My partner keeps stealing it from me.', 'Ha! Maybe time for a second bottle, Jonah. Thanks for the love.'],
      ['Elif G.', 5, '2025-03-02', 'Office perfect', 'Perfect for the office — fresh, never overpowering. Lovely amber finish.'],
      ['Marco S.', 4, '2025-02-14', 'Great summer scent', 'Great summer scent. Wish it lasted a touch longer but I love it.'],
      ['Nour A.', 5, '2025-01-27', 'Clean ocean breeze', 'Smells like a clean ocean breeze. So easy to wear every day.'],
    ]),
    related: ['white-orchid', 'citrus-luxe', 'golden-hour', 'midnight-bloom'],
  },
  {
    id: '3',
    slug: 'amber-royale',
    name: 'Amber Royale',
    tagline: 'Rich oriental warmth with a golden glow',
    collection: 'impressions',
    gender: 'unisex',
    family: 'warm',
    category: 'oriental',
    inspiredBy: { brand: 'MFK', scent: 'Baccarat Rouge 540' },
    retailPrice: 325,
    badges: ['BESTSELLER', 'LIMITED'],
    images: ['/images/amber-royale-2.png', '/images/about-1.jpg'],
    cardColor: '#C2772A',
    tint: '#F6EAD9',
    sizes: [sz(50, 49), sz(100, 79)],
    noteDescriptor: 'A radiant, addictive amber surprise',
    mainNotes: [
      { name: 'Saffron', icon: '🌾' },
      { name: 'Amber', icon: '🟠' },
      { name: 'Oud', icon: '🪵' },
      { name: 'Vanilla', icon: '🍦' },
    ],
    scentNotes: {
      top: ['Saffron', 'Cardamom'],
      heart: ['Amber', 'Oud'],
      base: ['Vanilla', 'Patchouli'],
    },
    topDesc: 'The first notes you smell — ceremonial saffron and cardamom.',
    middleDesc: 'The heart of the perfume — rich amber and rare oud.',
    baseDesc: 'The notes that linger all day — sweet vanilla and patchouli.',
    attributes: { vegan: true, crueltyFree: true, clean: true },
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
      'Amber Royale opens with a burst of saffron and cardamom — sharp, ceremonial, unmistakable. Within the hour it softens into rich oud and warm amber, settling finally into a skin-close vanilla that lasts well into the next morning.',
    ingredients:
      'Alcohol Denat., Aqua/Water, Parfum/Fragrance, Crocus Sativus, Elettaria Cardamomum, Amber Accord, Vanilla Planifolia, Coumarin, Pogostemon Cablin.',
    rating: 4.9,
    reviewCount: 214,
    stock: 8,
    reviews: reviews('ar', [
      ['Lena B.', 5, '2025-01-20', 'The most luxurious', 'The most luxurious scent I have ever worn — at a fraction of the price of the original.', 'This means the world, Lena. That is exactly why we do what we do. 💛'],
      ['Omar D.', 5, '2025-03-09', 'Unreal projection', 'Projection is unreal. One spray lasts me a full day and night.'],
      ['Sophia L.', 5, '2025-02-25', 'Expensive-smelling', 'Rich, warm and expensive-smelling. My go-to for special occasions.'],
      ['Yusuf K.', 5, '2025-02-08', 'A masterpiece', 'The saffron opening is incredible. This is a masterpiece.'],
      ['Camila F.', 4, '2025-01-30', 'A little goes far', 'Gorgeous but very strong — a little goes a long way. Stunning on skin.'],
    ]),
    related: ['velvet-oud', 'golden-hour', 'rose-noir', 'ocean-whisper'],
  },
  {
    id: '4',
    slug: 'citrus-luxe',
    name: 'Citrus Luxe',
    tagline: 'Vibrant citrus with a sophisticated dry-down',
    collection: 'impressions',
    gender: 'unisex',
    family: 'fresh',
    category: 'citrus',
    inspiredBy: { brand: 'Jo Malone', scent: 'Lime Basil & Mandarin' },
    retailPrice: 150,
    badges: ['NEW'],
    images: ['/images/citrus-luxe-1.png', '/images/feature-bottle.png'],
    cardColor: '#D98324',
    tint: '#FBEED7',
    sizes: [sz(50, 35), sz(100, 55)],
    noteDescriptor: 'A sunny citrus surprise',
    mainNotes: [
      { name: 'Grapefruit', icon: '🍊' },
      { name: 'Neroli', icon: '🌼' },
      { name: 'White Tea', icon: '🍵' },
      { name: 'Musk', icon: '☁️' },
    ],
    scentNotes: {
      top: ['Grapefruit', 'Neroli'],
      heart: ['White Tea', 'Iris'],
      base: ['Musk', 'Tonka Bean'],
    },
    topDesc: 'The first notes you smell — juicy grapefruit and bright neroli.',
    middleDesc: 'The heart of the perfume — calm white tea and iris.',
    baseDesc: 'The notes that linger all day — soft musk and tonka bean.',
    attributes: { vegan: true, crueltyFree: true, clean: true },
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
      'Citrus Luxe bursts open with juicy grapefruit and bright neroli — an instant lift, like sunlight on skin. It mellows into a calm white-tea and iris heart that feels polished and grown-up. A whisper of musk and tonka in the base keeps it soft and skin-close for hours.',
    ingredients:
      'Alcohol Denat., Aqua/Water, Parfum/Fragrance, Limonene, Citrus Paradisi, Citrus Aurantium Flower Oil, Iris Pallida, Coumarin, Linalool.',
    rating: 4.5,
    reviewCount: 63,
    reviews: reviews('cl', [
      ['Isabella M.', 5, '2025-03-21', 'So fresh', 'So fresh and uplifting. Perfect for warm mornings.'],
      ['Kenji T.', 4, '2025-03-05', 'Refined citrus', 'Lovely citrus that does not turn sour. Refined and clean.'],
      ['Amara O.', 5, '2025-02-19', 'Summer staple', 'My summer staple. Light but still feels luxurious.'],
      ['Grace W.', 4, '2025-02-02', 'Great everyday', 'Great everyday scent. Wish it lasted a bit longer on me.'],
      ['Selin A.', 5, '2025-01-18', 'Such a happy scent', 'The neroli is beautiful. Such a happy fragrance.'],
    ]),
    related: ['ocean-whisper', 'white-orchid', 'golden-hour', 'midnight-bloom'],
  },
  {
    id: '5',
    slug: 'velvet-oud',
    name: 'Velvet Oud',
    tagline: 'Smoky oud wrapped in soft suede',
    collection: 'originals',
    gender: 'unisex',
    family: 'woody',
    category: 'woody',
    inspiredBy: { brand: 'Tom Ford', scent: 'Oud Wood' },
    retailPrice: 260,
    badges: ['LIMITED'],
    images: ['/images/bottle-velvet-oud.png'],
    cardColor: '#6E3B4E',
    tint: '#EEE6E9',
    sizes: [sz(50, 65), sz(100, 99)],
    noteDescriptor: 'A dark, refined and quietly powerful woody',
    mainNotes: [
      { name: 'Oud', icon: '🪵' },
      { name: 'Suede', icon: '🟤' },
      { name: 'Pepper', icon: '🌶️' },
      { name: 'Leather', icon: '🧥' },
    ],
    scentNotes: {
      top: ['Black Pepper', 'Bergamot'],
      heart: ['Oud', 'Suede'],
      base: ['Leather', 'Amberwood'],
    },
    topDesc: 'The first notes you smell — black pepper and bergamot.',
    middleDesc: 'The heart of the perfume — genuine oud and supple suede.',
    baseDesc: 'The notes that linger all day — leather and amberwood.',
    attributes: { vegan: true, crueltyFree: true, clean: true },
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
      'Velvet Oud opens with a spark of black pepper and bergamot before the smoke rolls in. At its heart, genuine oud meets supple suede — dark, refined, and quietly powerful. The base of leather and amberwood lingers like the memory of a candlelit room.',
    ingredients:
      'Alcohol Denat., Aqua/Water, Parfum/Fragrance, Aquilaria Agallocha Wood Extract, Piper Nigrum, Cedrus Atlantica, Suede Accord, Coumarin.',
    rating: 4.7,
    reviewCount: 98,
    stock: 5,
    reviews: reviews('vo', [
      ['Omar D.', 5, '2025-03-02', 'A true signature', 'Incredibly rich and long lasting. A true signature scent.'],
      ['Victoria S.', 5, '2025-02-20', 'Gorgeous in winter', 'Smoky, leathery, gorgeous. Wears beautifully in cold weather.'],
      ['Idris B.', 5, '2025-02-04', 'Real oud quality', 'Real oud quality at this price is rare. Absolutely love it.', 'Crafting it in France makes all the difference. Thank you, Idris!'],
      ['Helena K.', 4, '2025-01-19', 'Start with one spray', 'Very bold — start with one spray. Stunning depth.'],
      ['Rashid A.', 5, '2025-01-06', '12+ hours', 'Lasts more than 12 hours on me. Endless compliments.'],
    ]),
    related: ['amber-royale', 'golden-hour', 'rose-noir', 'midnight-bloom'],
  },
  {
    id: '6',
    slug: 'rose-noir',
    name: 'Rose Noir',
    tagline: 'A dark, velvety rose with a spiced edge',
    collection: 'originals',
    gender: 'women',
    family: 'flowery',
    category: 'floral',
    inspiredBy: { brand: 'Frederic Malle', scent: 'Portrait of a Lady' },
    retailPrice: 290,
    badges: ['BESTSELLER'],
    images: ['/images/midnight-bloom-2.png', '/images/midnight-bloom-1.png'],
    cardColor: '#CB4030',
    tint: '#F6E5E7',
    sizes: [sz(50, 55), sz(100, 89)],
    noteDescriptor: 'Romance with a spiced, moody edge',
    mainNotes: [
      { name: 'Black Rose', icon: '🌹' },
      { name: 'Raspberry', icon: '🍓' },
      { name: 'Clove', icon: '🌶️' },
      { name: 'Patchouli', icon: '🍃' },
    ],
    scentNotes: {
      top: ['Pink Pepper', 'Raspberry'],
      heart: ['Black Rose', 'Clove'],
      base: ['Patchouli', 'Vanilla'],
    },
    topDesc: 'The first notes you smell — pink pepper and tart raspberry.',
    middleDesc: 'The heart of the perfume — brooding black rose and clove.',
    baseDesc: 'The notes that linger all day — patchouli and warm vanilla.',
    attributes: { vegan: true, crueltyFree: true, clean: true },
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
      'Rose Noir opens with pink pepper and tart raspberry — a rose that bites back. Its heart is a brooding black rose laced with clove, equal parts elegant and dangerous. Patchouli and vanilla pull it into a warm, gourmand dry-down that clings to skin and clothing.',
    ingredients:
      'Alcohol Denat., Aqua/Water, Parfum/Fragrance, Rosa Centifolia Flower Oil, Eugenia Caryophyllus, Pogostemon Cablin, Vanilla Planifolia, Citral, Geraniol.',
    rating: 4.8,
    reviewCount: 156,
    reviews: reviews('rn', [
      ['Nadia F.', 5, '2025-02-11', 'Dark and unique', 'Dark, sexy and unique. Nothing else in my collection smells like this.'],
      ['Chloe D.', 5, '2025-03-12', 'A grown-up rose', 'A grown-up rose. The spice keeps it from ever being sweet.'],
      ['Sofia R.', 5, '2025-02-27', 'Most complimented', 'My most complimented perfume by far. Pure seduction.', 'Swoon. Thank you, Sofia! Rose Noir is a team favourite too.'],
      ['Bilal H.', 4, '2025-02-09', 'Wife adores it', 'Bought for my wife, she adores it. Lasts all evening.'],
      ['Emma J.', 5, '2025-01-24', 'Addictive opening', 'The raspberry-rose opening is addictive. Worth every penny.'],
    ]),
    related: ['midnight-bloom', 'amber-royale', 'velvet-oud', 'golden-hour'],
  },
  {
    id: '7',
    slug: 'golden-hour',
    name: 'Golden Hour',
    tagline: 'Warm, luminous amber kissed by sunlight',
    collection: 'originals',
    gender: 'women',
    family: 'warm',
    category: 'oriental',
    inspiredBy: { brand: 'Carolina Herrera', scent: 'Good Girl' },
    retailPrice: 135,
    badges: ['NEW'],
    images: ['/images/bottle-golden-hour.png'],
    cardColor: '#C16A37',
    tint: '#FAEFD8',
    sizes: [sz(50, 39), sz(100, 65)],
    noteDescriptor: 'The glow of dusk, captured in a bottle',
    mainNotes: [
      { name: 'Mandarin', icon: '🍊' },
      { name: 'Honey', icon: '🍯' },
      { name: 'Amber', icon: '🟠' },
      { name: 'Tonka', icon: '🫘' },
    ],
    scentNotes: {
      top: ['Mandarin', 'Honey'],
      heart: ['Amber', 'Orange Blossom'],
      base: ['Benzoin', 'Tonka Bean'],
    },
    topDesc: 'The first notes you smell — sun-ripened mandarin and honey.',
    middleDesc: 'The heart of the perfume — amber and orange blossom.',
    baseDesc: 'The notes that linger all day — resinous benzoin and tonka.',
    attributes: { vegan: true, crueltyFree: true, clean: true },
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
      'Golden Hour opens with sun-ripened mandarin and a drizzle of honey — bright, warm, and welcoming. Amber and orange blossom bloom at its heart, glowing like the last light of the day. Benzoin and tonka settle into a soft, resinous warmth that feels like a cashmere wrap.',
    ingredients:
      'Alcohol Denat., Aqua/Water, Parfum/Fragrance, Citrus Reticulata, Honey Accord, Styrax Benzoin, Dipteryx Odorata, Coumarin, Linalool.',
    rating: 4.6,
    reviewCount: 74,
    reviews: reviews('gh', [
      ['Ines V.', 5, '2025-03-16', 'Cozy without being heavy', 'Warm and cozy without being heavy. I wear it constantly.'],
      ['Theo M.', 4, '2025-03-01', 'Lovely for autumn', 'Lovely honeyed amber. Great for autumn evenings.'],
      ['Layla S.', 5, '2025-02-15', 'A golden sunset', 'Smells like a golden sunset. So comforting and pretty.'],
      ['Noah B.', 4, '2025-01-29', 'Soft but grown-up', 'Soft and sweet but grown-up. Nice projection.'],
      ['Aria P.', 5, '2025-01-12', 'Winter comfort', 'My winter comfort scent. The tonka base is gorgeous.'],
    ]),
    related: ['amber-royale', 'velvet-oud', 'citrus-luxe', 'midnight-bloom'],
  },
  {
    id: '8',
    slug: 'white-orchid',
    name: 'White Orchid',
    tagline: 'Pure, airy florals with a creamy heart',
    collection: 'originals',
    gender: 'women',
    family: 'flowery',
    category: 'fresh',
    inspiredBy: { brand: 'Marc Jacobs', scent: 'Daisy' },
    retailPrice: 110,
    badges: [],
    images: ['/images/ocean-whisper-2.png', '/images/citrus-luxe-1.png'],
    cardColor: '#9AAE8E',
    tint: '#ECF0E6',
    sizes: [sz(50, 35), sz(100, 55)],
    noteDescriptor: 'Quiet sophistication, like a tailored white shirt',
    mainNotes: [
      { name: 'Pear', icon: '🍐' },
      { name: 'Freesia', icon: '🌷' },
      { name: 'Orchid', icon: '🌸' },
      { name: 'Musk', icon: '☁️' },
    ],
    scentNotes: {
      top: ['Pear', 'Freesia'],
      heart: ['White Orchid', 'Lily'],
      base: ['White Musk', 'Cashmere Wood'],
    },
    topDesc: 'The first notes you smell — crisp pear and airy freesia.',
    middleDesc: 'The heart of the perfume — creamy white orchid and lily.',
    baseDesc: 'The notes that linger all day — white musk and cashmere wood.',
    attributes: { vegan: true, crueltyFree: true, clean: true },
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
      'White Orchid opens with crisp pear and airy freesia — fresh, dewy, and luminous. A creamy white orchid and lily heart lends a soft, refined elegance that never tips into powdery. White musk and cashmere wood close it with a clean, second-skin warmth.',
    ingredients:
      'Alcohol Denat., Aqua/Water, Parfum/Fragrance, Pyrus Communis, Freesia Refracta, Orchid Accord, White Musk, Linalool, Hexyl Cinnamal.',
    rating: 4.4,
    reviewCount: 51,
    reviews: reviews('wo', [
      ['Mei L.', 5, '2025-03-08', 'Clean and elegant', 'So clean and elegant. My everyday office scent.'],
      ['Hannah G.', 4, '2025-02-22', 'Soft and pretty', 'Soft and pretty. Great for people who dislike strong perfume.'],
      ['Olivia C.', 5, '2025-02-06', 'Effortlessly chic', 'The orchid is creamy and beautiful. Effortlessly chic.'],
      ['Ravi N.', 4, '2025-01-20', 'Perfect for work', 'Light and fresh, perfect for work. Lovely on my partner.'],
      ['Beatriz F.', 5, '2025-01-05', 'A luxurious me', 'Like a freshly laundered, luxurious version of myself.'],
    ]),
    related: ['ocean-whisper', 'citrus-luxe', 'midnight-bloom', 'golden-hour'],
  },
]

// ---- Selectors ----
export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug)

export const getRelatedProducts = (slugs: string[]) =>
  slugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => Boolean(p))

export const getProductsByCategory = (cat: string) =>
  cat === 'all' ? products : products.filter((p) => p.category === cat)

export const bestSellers = products.filter((p) =>
  p.badges.includes('BESTSELLER')
)
export const newArrivals = products.filter((p) => p.badges.includes('NEW'))
export const impressions = products.filter((p) => p.collection === 'impressions')
export const originals = products.filter((p) => p.collection === 'originals')

/** Lowest guest price across a product's sizes. */
export const lowestGuest = (p: Product) =>
  Math.min(...p.sizes.map((s) => s.guest))
export const lowestMember = (p: Product) =>
  Math.min(...p.sizes.map((s) => s.member))
