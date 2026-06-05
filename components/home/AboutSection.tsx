'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { slideInLeft, slideInRight } from '@/lib/animations'

const PROOF_POINTS = [
  'Crafted in small batches',
  'No synthetic shortcuts',
  'Tested on 10,000+ wearers',
]

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="max-w-content mx-auto px-6 py-20 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Images: stacked editorial grid */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex justify-center md:block w-full"
        >
          {/* Inner box sized to the collage bounds so mx-auto/justify-center
              actually centres the cluster on mobile instead of pinning it left */}
          <div className="relative w-[280px] h-[400px] md:w-full md:h-[480px] lg:h-[560px]">
            <div className="absolute top-0 left-0 w-36 md:w-40 lg:w-56 h-48 lg:h-72 rounded-card overflow-hidden shadow-hover">
              <Image
                src="/images/about-1.jpg"
                alt="Perfume bottle"
                fill
                className="object-cover"
                sizes="(max-width:768px) 45vw, 20vw"
              />
            </div>
            <div className="absolute top-10 left-[135px] md:top-8 md:left-36 lg:top-12 lg:left-[210px] w-36 lg:w-52 h-52 lg:h-64 rounded-card overflow-hidden shadow-card">
              <Image
                src="/images/about-2.jpg"
                alt="Rare ingredients"
                fill
                className="object-cover"
                sizes="(max-width:768px) 45vw, 20vw"
              />
            </div>
            <div className="absolute top-44 left-6 md:top-40 md:left-10 lg:top-56 lg:left-14 w-44 lg:w-64 h-56 lg:h-80 rounded-card overflow-hidden shadow-hover">
              <Image
                src="/images/about-3.jpg"
                alt="Model wearing perfume"
                fill
                className="object-cover"
                sizes="(max-width:768px) 55vw, 22vw"
              />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col gap-5 text-left"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-gold-primary">
            About us
          </p>
          <h2 className="font-heading text-4xl md:text-6xl text-charcoal leading-tight">
            Essence <em>of</em>
            <br />
            <em>Luxury</em>
          </h2>
          <p className="font-body text-base text-muted leading-relaxed">
            Every Mazah bottle takes{' '}
            <strong className="text-charcoal">6 months and 50+ ingredient
            trials</strong>
            . We source from Grasse, Oman, and Kannauj, blend in-house, and stop
            only when it’s <strong className="text-charcoal">right</strong> — not
            when it’s ready.
          </p>

          {/* Proof points */}
          <ul className="flex flex-col gap-2.5 w-fit">
            {PROOF_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2.5"
              >
                <span className="w-5 h-5 rounded-full bg-gold-primary/15 grid place-items-center flex-shrink-0">
                  <Check size={12} className="text-gold-primary" />
                </span>
                <span className="font-body text-sm text-charcoal">{point}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 self-start mt-1 font-body text-sm tracking-widest uppercase text-gold-primary hover:gap-3 transition-all group"
          >
            Read Our Story
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
