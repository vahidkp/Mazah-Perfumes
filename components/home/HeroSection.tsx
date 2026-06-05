'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, RotateCcw, Truck, Sparkles } from 'lucide-react'
import { staggerContainer, staggerChild, scaleIn } from '@/lib/animations'

// Decorative brand ticker replaced with a genuine trust ticker (CRO audit QW#02).
const TRUST_TICKER = [
  '4.9 ★ from 500+ reviews',
  'Free shipping over $100',
  '30-day returns',
  'Shipped to 120 countries',
  '8–12 hour longevity',
  'Cruelty-free ingredients',
]

const TRUST_PILLS = [
  { icon: Star, text: '4.9 ★ · 500+ reviews' },
  { icon: RotateCcw, text: '30-day returns' },
  { icon: Truck, text: 'Free shipping $100+' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] bg-hero-gradient overflow-hidden flex flex-col pt-[96px] md:pt-[108px]">
      {/* Bokeh overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 60% 50%, rgba(255,255,255,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-content mx-auto px-4 md:px-6 w-full grid md:grid-cols-2 gap-6 md:gap-12 items-center py-10 md:py-16 flex-1">
        {/* Text block */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-5 z-10 text-center md:text-left order-2 md:order-1"
        >
          <motion.p
            variants={staggerChild}
            className="font-body text-xs uppercase tracking-[0.35em] text-white/70"
          >
            Mazah · Elegance in Bloom
          </motion.p>

          <motion.h1
            variants={staggerChild}
            className="font-display text-4xl sm:text-5xl md:text-7xl text-white font-bold leading-[1.0]"
          >
            Luxury fragrances <br className="hidden sm:block" />
            that <em className="font-normal">linger</em>.
          </motion.h1>

          <motion.p
            variants={staggerChild}
            className="font-body text-sm md:text-base text-white/80 max-w-md mx-auto md:mx-0 leading-relaxed"
          >
            Rare botanicals, blended in small batches and built to last{' '}
            <strong className="text-white">8–12 hours</strong> on every skin
            type. Shipped to <strong className="text-white">120+ countries</strong>.
          </motion.p>

          {/* Trust pills — placed immediately before CTAs */}
          <motion.div
            variants={staggerChild}
            className="flex flex-wrap justify-center md:justify-start gap-2"
          >
            {TRUST_PILLS.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-1.5 rounded-pill bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1.5 font-body text-[11px] tracking-wide text-white"
              >
                <Icon size={12} className="text-gold-light" />
                {text}
              </span>
            ))}
          </motion.div>

          {/* Dual CTA */}
          <motion.div
            variants={staggerChild}
            className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-1"
          >
            <Link
              href="/collections"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-pill bg-charcoal text-cream font-body text-sm tracking-widest uppercase hover:bg-charcoal/85 transition-all duration-300 group"
            >
              Shop Fragrances
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-pill border border-white/70 text-white font-body text-sm tracking-widest uppercase hover:bg-white hover:text-charcoal transition-all duration-300"
            >
              <Sparkles size={15} />
              Find My Scent
            </Link>
          </motion.div>

          {/* Quiz nudge for undecided visitors */}
          <motion.p variants={staggerChild}>
            <Link
              href="/quiz"
              className="font-body text-xs text-white/70 underline underline-offset-4 hover:text-white transition-colors"
            >
              Not sure where to start? Take the 30-second scent quiz →
            </Link>
          </motion.p>
        </motion.div>

        {/* Bottle image */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="relative flex justify-center items-center h-[340px] sm:h-[420px] md:h-[560px] order-1 md:order-2"
        >
          {/* Scarcity badge (Amber Royale is LIMITED, 8 left) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute top-[16%] right-[4%] bg-charcoal text-cream rounded-pill px-4 py-2 font-body text-xs font-semibold shadow-card z-10"
          >
            🔥 Only 8 left
          </motion.div>

          {/* Floating review card — social proof above the fold */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute bottom-[4%] right-0 w-44 sm:w-52 bg-white/95 backdrop-blur-sm rounded-card p-3 sm:p-3.5 shadow-hover z-10 text-left"
          >
            <div className="flex gap-0.5 mb-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={12} fill="#C8962A" stroke="#C8962A" />
              ))}
            </div>
            <p className="font-body text-xs text-charcoal leading-snug">
              “Compliment magnet. People stop me to ask what I’m wearing.”
            </p>
            <p className="font-body text-[10px] text-muted mt-1.5">
              Aaliyah N. · Verified buyer
            </p>
          </motion.div>

          <Image
            src="/images/hero-bottle.png"
            alt="Mazah signature fragrance"
            width={400}
            height={560}
            className="object-contain h-full w-auto relative z-0 drop-shadow-2xl"
            sizes="(max-width:768px) 60vw, 40vw"
            priority
          />
        </motion.div>
      </div>

      {/* Trust ticker strip — kept in normal flow so it's never clipped below
          the fold on tall mobile layouts (replaces decorative brand marquee) */}
      <div className="relative z-10 w-full overflow-hidden bg-white/10 backdrop-blur-sm py-3 border-t border-white/20">
        <div
          className="flex gap-3 animate-marquee whitespace-nowrap"
          style={{ width: 'max-content' }}
        >
          {[...TRUST_TICKER, ...TRUST_TICKER].map((tag, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-white/20 text-white font-body text-xs font-medium flex-shrink-0"
            >
              {tag} ✦
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
