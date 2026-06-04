'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { staggerContainer, staggerChild, scaleIn } from '@/lib/animations'

const TAGS = [
  'Citrus Luxe',
  'Social',
  'Advance',
  'Amber Royale',
  'Glow',
  'Midnight Bloom',
  'Ocean Whisper',
  'Floral & Musk',
]

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] bg-hero-gradient overflow-hidden flex items-center pt-[60px] md:pt-[72px]">
      {/* Bokeh overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 60% 50%, rgba(255,255,255,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-content mx-auto px-4 md:px-6 w-full grid md:grid-cols-2 gap-6 md:gap-12 items-center py-12 md:py-20">
        {/* Text block */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 z-10 text-center md:text-left order-2 md:order-1"
        >
          <motion.h1
            variants={staggerChild}
            className="font-display text-5xl sm:text-6xl md:text-8xl text-white font-bold leading-[0.95]"
          >
            Elegance
            <br />
            <em className="font-normal">in Bloom</em>
          </motion.h1>

          <motion.p
            variants={staggerChild}
            className="font-body text-sm md:text-base text-white/75 max-w-sm mx-auto md:mx-0 leading-relaxed"
          >
            Experience timeless luxury perfumes crafted with passion and
            elegance, designed to leave a lasting impression.
          </motion.p>

          <motion.div
            variants={staggerChild}
            className="flex justify-center md:justify-start"
          >
            <Link
              href="/collections"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-pill border border-white/60 text-white font-body text-sm tracking-widest uppercase hover:bg-white hover:text-charcoal transition-all duration-300 group"
            >
              Explore Collections
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottle image */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="relative flex justify-center items-center h-[300px] sm:h-[380px] md:h-[600px] order-1 md:order-2"
        >
          {/* Floating tag: Luxe */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute top-[18%] right-[6%] bg-white/90 backdrop-blur-sm rounded-pill px-4 py-2 font-body text-xs font-semibold text-charcoal shadow-card z-10"
          >
            ✦ Luxe
          </motion.div>

          {/* Floating tag: Royale */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="absolute bottom-[28%] left-[2%] bg-white/90 backdrop-blur-sm rounded-pill px-4 py-2 font-body text-xs font-semibold text-charcoal shadow-card z-10"
          >
            ✦ Royale
          </motion.div>

          {/* Product card popup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="absolute bottom-[6%] right-0 w-44 md:w-48 bg-white/95 backdrop-blur-sm rounded-card p-3 shadow-hover z-10"
          >
            <p className="font-heading text-sm text-charcoal font-semibold">
              Floral &amp; Musk
            </p>
            <p className="font-body text-xs text-muted mt-0.5">
              A delicate spring garden
            </p>
            <p className="font-heading text-base text-gold-primary mt-1 font-semibold">
              $89.00
            </p>
          </motion.div>

          <Image
            src="/images/hero-bottle.svg"
            alt="Mazah signature fragrance"
            width={400}
            height={560}
            className="object-contain h-full w-auto relative z-0 drop-shadow-2xl"
            sizes="(max-width:768px) 60vw, 40vw"
            priority
          />
        </motion.div>
      </div>

      {/* Tag marquee strip */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden bg-white/10 backdrop-blur-sm py-3 border-t border-white/20">
        <div
          className="flex gap-3 animate-marquee whitespace-nowrap"
          style={{ width: 'max-content' }}
        >
          {[...TAGS, ...TAGS].map((tag, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-white/20 text-white font-body text-xs font-medium cursor-pointer hover:bg-white/30 transition-colors flex-shrink-0"
            >
              {tag} ✦
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
