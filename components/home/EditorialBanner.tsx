'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function EditorialBanner() {
  return (
    <section className="max-w-content mx-auto px-6 py-12 md:py-20">
      <ScrollReveal className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#E7C98F] via-[#D9A85B] to-[#C8962A] min-h-[420px] md:min-h-[480px] flex items-center">
        {/* Model image left */}
        <div className="absolute left-0 top-0 bottom-0 w-1/2 md:w-2/5 hidden sm:block">
          <Image
            src="/images/editorial-model.jpg"
            alt="Model with Illure fragrance"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>

        {/* Faint ILLURE wordmark */}
        <span className="absolute inset-0 flex items-center justify-center font-display text-[30vw] md:text-[16rem] font-bold text-white/10 select-none pointer-events-none leading-none">
          ILLURE
        </span>

        {/* Content right */}
        <div className="relative z-10 ml-auto w-full sm:w-3/5 md:w-1/2 px-8 md:px-14 py-12 text-center sm:text-left">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-white/70 mb-3">
            Featured Collection
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-white font-bold leading-tight">
            Vibrant &amp; <em className="font-normal">Everlasting</em>
          </h2>
          <p className="font-body text-sm md:text-base text-white/80 mt-4 max-w-sm mx-auto sm:mx-0">
            A radiant composition built to bloom on skin and linger in memory —
            the heart of the Illure edit.
          </p>
          <Link
            href="/collections"
            className="inline-flex items-center gap-3 mt-6 px-8 py-3.5 rounded-pill bg-charcoal text-cream font-body text-sm tracking-widest uppercase hover:bg-charcoal/80 transition-all duration-300 group"
          >
            Explore
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </ScrollReveal>
    </section>
  )
}
