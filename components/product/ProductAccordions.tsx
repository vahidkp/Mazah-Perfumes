'use client'
import type { Product } from '@/types'
import Accordion from '@/components/ui/Accordion'

export default function ProductAccordions({ product }: { product: Product }) {
  const items = [
    {
      title: 'About',
      content: (
        <div className="space-y-3">
          <p>{product.description}</p>
          <p>{product.story}</p>
        </div>
      ),
    },
    {
      title: 'Shipping',
      content:
        'Free standard shipping on all orders over $100. Orders ship within 24 hours and arrive in 3–5 business days. Mazah+ members enjoy free shipping on every order.',
    },
    {
      title: 'Returns',
      content:
        'Not in love? Free exchanges for all. Free returns within 30 days with Mazah+. Simply reach out to our team and we will make it right.',
    },
    {
      title: 'FAQs',
      content: (
        <div className="space-y-3">
          <div>
            <p className="font-medium text-ink">Is this an authentic designer perfume?</p>
            <p>
              No — it&apos;s a Mazah Impression: our own premium interpretation
              inspired by {product.inspiredBy.brand}&apos;s {product.inspiredBy.scent},
              crafted in France at a fraction of the price.
            </p>
          </div>
          <div>
            <p className="font-medium text-ink">How long does it last?</p>
            <p>{product.specs.longevity} with {product.specs.sillage.toLowerCase()} projection.</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Details',
      content: (
        <ul className="space-y-1.5">
          <li><span className="text-ink font-medium">Concentration:</span> {product.specs.concentration}</li>
          <li><span className="text-ink font-medium">Longevity:</span> {product.specs.longevity}</li>
          <li><span className="text-ink font-medium">Sillage:</span> {product.specs.sillage}</li>
          <li><span className="text-ink font-medium">Best season:</span> {product.specs.season}</li>
          <li><span className="text-ink font-medium">Best for:</span> {product.specs.bestFor}</li>
        </ul>
      ),
    },
  ]
  return <Accordion items={items} defaultOpen={[0]} />
}
