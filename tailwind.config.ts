import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Core Dossier-style palette (clean white / near-black)
        ink: '#141414',
        paper: '#FFFFFF',
        canvas: '#FBFAF8', // page background, barely-warm white
        card: '#F4F1EC', // light warm product-card surface
        line: '#E9E5DF', // hairline borders
        muted: '#6E6A63', // secondary text
        faint: '#9C978E', // tertiary / meta text
        // Accents
        coral: '#D6492E', // "Inspired by" + member price (Dossier red)
        gold: {
          primary: '#C8962A', // retained Mazah brand gold for subtle touches
          light: '#E8C56A',
        },
        // Scent-family / category tag colors
        tag: {
          warm: '#F3C76B',
          flowery: '#F4C7D2',
          gourmand: '#F2C29A',
          earthy: '#CBD8AC',
          fresh: '#BBD7E0',
          woody: '#D8C3A6',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // tight editorial scale
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        content: '1280px',
        wide: '1440px',
      },
      borderRadius: {
        card: '14px',
        pill: '999px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(20,20,20,0.04)',
        hover: '0 10px 30px rgba(20,20,20,0.10)',
        pop: '0 8px 40px rgba(20,20,20,0.14)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
