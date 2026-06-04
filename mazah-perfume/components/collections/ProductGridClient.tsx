'use client'
import { Fragment, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Product } from '@/types'
import FilterBar from './FilterBar'
import ProductCard from '@/components/ui/ProductCard'

export default function ProductGridClient({
  allProducts,
}: {
  allProducts: Product[]
}) {
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('Most Popular')

  const filtered = useMemo(() => {
    let list =
      category === 'all'
        ? allProducts
        : allProducts.filter((p) => p.category === category)
    if (sort === 'Price: Low–High')
      list = [...list].sort((a, b) => a.sizes[0].price - b.sizes[0].price)
    if (sort === 'Price: High–Low')
      list = [...list].sort((a, b) => b.sizes[0].price - a.sizes[0].price)
    if (sort === 'Newest') list = [...list].reverse()
    return list
  }, [allProducts, category, sort])

  return (
    <>
      <FilterBar
        activeCategory={category}
        activeSort={sort}
        onCategory={setCategory}
        onSort={setSort}
      />

      <section className="max-w-content mx-auto px-6 py-12 md:py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-heading text-4xl text-muted">
              No fragrances found
            </p>
            <p className="font-body text-sm text-muted mt-2">
              Try a different category to find your scent.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {filtered.map((product, i) => (
              <Fragment key={product.id}>
                {i === 6 && (
                  <div className="col-span-2 md:col-span-3 rounded-card overflow-hidden bg-hero-gradient flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-8 md:px-10 py-10 my-2">
                    <div>
                      <p className="font-body text-xs uppercase tracking-widest text-cream/70 mb-2">
                        Limited Edition
                      </p>
                      <h3 className="font-display text-3xl text-white font-bold">
                        The Golden Hour
                      </h3>
                      <p className="font-body text-sm text-cream/80 mt-2 max-w-xs">
                        A curated set of our warmest, most luminous fragrances.
                      </p>
                      <Link
                        href="/collections/golden-hour"
                        className="inline-block mt-4 px-6 py-2.5 border border-cream/60 text-cream text-xs tracking-widest uppercase rounded-pill hover:bg-cream hover:text-charcoal transition-all"
                      >
                        Shop the Set →
                      </Link>
                    </div>
                  </div>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              </Fragment>
            ))}
          </div>
        )}
      </section>
    </>
  )
}
