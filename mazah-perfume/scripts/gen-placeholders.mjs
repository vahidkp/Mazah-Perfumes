import { writeFileSync, mkdirSync } from 'fs'

const OUT = new URL('../public/images/', import.meta.url)
mkdirSync(OUT, { recursive: true })

// A stylised perfume bottle on a transparent background (object-contain on a
// gold card produces a clean product-shot look). `tone` shifts the liquid hue.
function bottle(label, tone = '#C8962A', accent = '#E8C56A') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 560" width="400" height="560">
  <defs>
    <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.85"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0.35"/>
    </linearGradient>
    <linearGradient id="liquid" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${accent}"/>
      <stop offset="1" stop-color="${tone}"/>
    </linearGradient>
  </defs>
  <!-- cap -->
  <rect x="170" y="40" width="60" height="70" rx="8" fill="${tone}"/>
  <rect x="178" y="20" width="44" height="34" rx="6" fill="${accent}"/>
  <!-- neck -->
  <rect x="182" y="104" width="36" height="34" fill="${tone}" opacity="0.85"/>
  <!-- body -->
  <rect x="96" y="138" width="208" height="320" rx="34" fill="url(#glass)" stroke="${tone}" stroke-width="3"/>
  <!-- liquid fill -->
  <rect x="112" y="250" width="176" height="192" rx="22" fill="url(#liquid)" opacity="0.92"/>
  <!-- highlight -->
  <rect x="124" y="166" width="26" height="250" rx="13" fill="#ffffff" opacity="0.45"/>
  <!-- label -->
  <rect x="138" y="300" width="124" height="92" rx="8" fill="#FAF6EE" opacity="0.92"/>
  <text x="200" y="338" font-family="Georgia, serif" font-size="20" font-weight="700"
        fill="#1C1C1C" text-anchor="middle">MAZAH</text>
  <text x="200" y="364" font-family="Georgia, serif" font-size="13" font-style="italic"
        fill="#8A7E6E" text-anchor="middle">${label}</text>
</svg>`
}

// A soft editorial gradient tile with a faint ring motif (lifestyle / model
// photo stand-in).
function tile(label, c1, c2) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#bg)"/>
  <circle cx="300" cy="270" r="150" fill="none" stroke="#ffffff" stroke-opacity="0.22" stroke-width="2"/>
  <circle cx="300" cy="270" r="96" fill="none" stroke="#ffffff" stroke-opacity="0.30" stroke-width="2"/>
  <text x="300" y="500" font-family="Georgia, serif" font-size="30" font-style="italic"
        fill="#ffffff" fill-opacity="0.85" text-anchor="middle">${label}</text>
</svg>`
}

const write = (name, svg) =>
  writeFileSync(new URL(name, OUT), svg.trim() + '\n')

// Product bottles — name + tonal variant ----------------------------------
const productTones = {
  'midnight-bloom': ['#9B6FB0', '#D9A7E0'],
  'ocean-whisper': ['#3F8FA6', '#8FD2DE'],
  'amber-royale': ['#B5791E', '#E8C56A'],
  'citrus-luxe': ['#C9A227', '#F2E07A'],
  'velvet-oud': ['#6E4A2F', '#B98A5E'],
  'rose-noir': ['#8A2B45', '#D87A93'],
  'golden-hour': ['#D08A2C', '#F4C870'],
  'white-orchid': ['#B9A9C9', '#EADFF2'],
}
const labels = {
  'midnight-bloom': 'Midnight Bloom',
  'ocean-whisper': 'Ocean Whisper',
  'amber-royale': 'Amber Royale',
  'citrus-luxe': 'Citrus Luxe',
  'velvet-oud': 'Velvet Oud',
  'rose-noir': 'Rose Noir',
  'golden-hour': 'Golden Hour',
  'white-orchid': 'White Orchid',
}
for (const slug of Object.keys(productTones)) {
  const [tone, accent] = productTones[slug]
  write(`${slug}-1.svg`, bottle(labels[slug], tone, accent))
  write(`${slug}-2.svg`, bottle(labels[slug] + ' II', accent, tone))
}

// Home hero / feature bottles ---------------------------------------------
write('hero-bottle.svg', bottle('Elegance in Bloom', '#C8962A', '#F0D78F'))
write('feature-bottle.svg', bottle('Signature', '#B5791E', '#E8C56A'))

// Editorial / about / gallery tiles ---------------------------------------
write('editorial-model.svg', tile('Illure', '#E7C98F', '#C8962A'))
write('about-1.svg', tile('Craft', '#E8C56A', '#C8962A'))
write('about-2.svg', tile('Ingredients', '#D4A853', '#B5791E'))
write('about-3.svg', tile('Atelier', '#C8962A', '#8A5E1E'))
write('gallery-1.svg', tile('Bloom', '#D4903A', '#C8962A'))
write('gallery-2.svg', tile('Glow', '#E8C56A', '#D4A853'))
write('gallery-3.svg', tile('Amber', '#C8962A', '#B5791E'))
write('gallery-4.svg', tile('Luxe', '#D4A853', '#C8962A'))
write('gallery-5.svg', tile('Detail', '#E7C98F', '#D4903A'))

console.log('Placeholder images generated.')
