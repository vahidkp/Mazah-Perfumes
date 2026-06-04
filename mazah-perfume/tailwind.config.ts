import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          primary: '#C8962A',
          light: '#E8C56A',
          muted: '#D4A853',
        },
        amber: {
          bg: '#D4903A',
          50: '#FBF3E4',
          100: '#F4E3C5',
        },
        cream: '#FAF6EE',
        charcoal: '#1C1C1C',
        muted: '#8A7E6E',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        heading: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
      maxWidth: { content: '1280px' },
      borderRadius: {
        card: '12px',
        pill: '999px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.08)',
        hover: '0 12px 40px rgba(0,0,0,0.14)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
export default config
