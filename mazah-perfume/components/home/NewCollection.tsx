'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from '@/components/ui/ProductCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { products } from '@/lib/data/products'

const CARD_WIDTH = 280
const CARD_GAP = 24

export default function NewCollection() {
  const [index, setIndex] = useState(0)
  const maxIndex = Math.max(0, products.length - 4)

  const prev = () => setIndex((i) => Math.max(0, i - 1))
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1))

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-heading text-4xl md:text-5xl text-charcoal">
              New <strong>Collection</strong>
            </h2>
            <div className="flex gap-2">
              <button
                onClick={prev}
                disabled={index === 0}
                aria-label="Previous"
                className="w-10 h-10 rounded-full border border-charcoal/20 grid place-items-center hover:border-gold-primary hover:text-gold-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                disabled={index >= maxIndex}
                aria-label="Next"
                className="w-10 h-10 rounded-full bg-gold-primary text-white grid place-items-center hover:bg-gold-muted transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div className="overflow-hidden -mx-6 px-6">
          <motion.div
            className="flex gap-6"
            animate={{ x: -index * (CARD_WIDTH + CARD_GAP) }}
            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            drag="x"
            dragConstraints={{
              left: -(maxIndex * (CARD_WIDTH + CARD_GAP)),
              right: 0,
            }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50) next()
              if (info.offset.x > 50) prev()
            }}
            style={{ cursor: 'grab' }}
          >
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                style={{ minWidth: CARD_WIDTH }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
