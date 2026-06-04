'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { slideInLeft, slideInRight } from '@/lib/animations'

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
          className="relative h-[360px] md:h-[480px] mx-auto w-full max-w-sm md:max-w-none"
        >
          <div className="absolute top-0 left-2 md:left-0 w-32 md:w-40 h-40 md:h-48 rounded-card overflow-hidden shadow-hover">
            <Image
              src="/images/about-1.svg"
              alt="Perfume bottle"
              fill
              className="object-cover"
              sizes="(max-width:768px) 40vw, 20vw"
            />
          </div>
          <div className="absolute top-8 left-32 md:left-36 w-32 md:w-36 h-44 md:h-52 rounded-card overflow-hidden shadow-card">
            <Image
              src="/images/about-2.svg"
              alt="Rare ingredients"
              fill
              className="object-cover"
              sizes="(max-width:768px) 40vw, 20vw"
            />
          </div>
          <div className="absolute top-40 left-8 md:left-10 w-40 md:w-44 h-48 md:h-56 rounded-card overflow-hidden shadow-hover">
            <Image
              src="/images/about-3.svg"
              alt="Model wearing perfume"
              fill
              className="object-cover"
              sizes="(max-width:768px) 45vw, 22vw"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col gap-5 text-center md:text-left"
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
            Our <strong className="text-charcoal">master perfumers</strong>{' '}
            carefully blend rare ingredients sourced from around the globe to
            create{' '}
            <strong className="text-charcoal">
              perfumes that speak to the soul
            </strong>
            . Each bottle{' '}
            <strong className="text-charcoal">is a symbol of</strong> luxury,
            sophistication, and individuality.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
