import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  getProductBySlug,
  getRelatedProducts,
  products,
} from '@/lib/data/products'
import ImageGallery from '@/components/product/ImageGallery'
import PdpFeatures from '@/components/product/PdpFeatures'
import ProductInfo from '@/components/product/ProductInfo'
import ScentNotes from '@/components/product/ScentNotes'
import ProductAccordions from '@/components/product/ProductAccordions'
import ReviewsSection from '@/components/product/ReviewsSection'
import RelatedProducts from '@/components/product/RelatedProducts'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  return {
    title: product ? `${product.name} — Mazah` : 'Not Found',
    description: product?.description,
  }
}

export default function ProductPage({
  params,
}: {
  params: { slug: string }
}) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()
  const related = getRelatedProducts(product.related)
  const collectionLabel =
    product.collection === 'impressions' ? 'Mazah Impressions' : 'Mazah Originals'

  return (
    <div className="pt-4">
      {/* Breadcrumb */}
      <div className="container-wide flex items-center gap-1.5 text-xs text-muted">
        <Link href="/collections" className="inline-flex items-center gap-1 hover:text-ink">
          <ChevronLeft size={14} /> Back
        </Link>
        <ChevronRight size={12} className="text-line" />
        <Link href="/collections" className="hover:text-ink">Perfumes</Link>
        <ChevronRight size={12} className="text-line" />
        <Link
          href={`/collections?c=${product.collection}`}
          className="hover:text-ink"
        >
          {collectionLabel}
        </Link>
        <ChevronRight size={12} className="text-line" />
        <span className="text-ink uppercase tracking-wide">{product.name}</span>
      </div>

      {/* Hero */}
      <section className="container-wide py-6">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-12 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-20">
            <ImageGallery
              images={product.images}
              name={product.name}
              tint={product.tint}
            />
            <PdpFeatures product={product} />
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6">
            <ProductInfo product={product} />
            <ScentNotes product={product} />
            <ProductAccordions product={product} />
          </div>
        </div>
      </section>

      <RelatedProducts products={related} />
      <ReviewsSection
        reviews={product.reviews}
        rating={product.rating}
        count={product.reviewCount}
      />
    </div>
  )
}
