import type { Metadata } from 'next'
import { products } from '@/lib/data/products'
import CollectionsHero from '@/components/collections/CollectionsHero'
import ProductGridClient from '@/components/collections/ProductGridClient'

export const metadata: Metadata = {
  title: 'Collections — Mazah Perfume',
  description: 'Browse the full Mazah fragrance collection.',
}

export default function CollectionsPage() {
  return (
    <>
      <CollectionsHero />
      <ProductGridClient allProducts={products} />
    </>
  )
}
