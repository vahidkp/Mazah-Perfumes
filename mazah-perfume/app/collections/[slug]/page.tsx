import { notFound } from 'next/navigation'
import {
  getProductBySlug,
  getRelatedProducts,
  products,
} from '@/lib/data/products'
import ImageGallery from '@/components/product/ImageGallery'
import ProductInfo from '@/components/product/ProductInfo'
import ScentStory from '@/components/product/ScentStory'
import ReviewsSection from '@/components/product/ReviewsSection'
import RelatedProducts from '@/components/product/RelatedProducts'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  return { title: product ? `${product.name} — Mazah` : 'Not Found' }
}

export default function ProductPage({
  params,
}: {
  params: { slug: string }
}) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()
  const related = getRelatedProducts(product.related)

  return (
    <div className="pt-24">
      {/* Hero: image + info */}
      <section className="max-w-content mx-auto px-6 py-12">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-start">
          <ImageGallery
            images={product.images}
            name={product.name}
            badges={product.badges}
          />
          <div className="md:sticky md:top-24">
            <ProductInfo product={product} />
          </div>
        </div>
      </section>

      <ScentStory product={product} />
      <ReviewsSection
        reviews={product.reviews}
        rating={product.rating}
        count={product.reviewCount}
      />
      <RelatedProducts products={related} />
    </div>
  )
}
