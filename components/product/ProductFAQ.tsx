import Link from 'next/link'
import type { Product } from '@/types'
import Accordion from '@/components/ui/Accordion'

interface Props {
  product: Product
}

// Purchase-decision FAQs for the PDP. Answers are made product-specific from
// the structured `specs` so each fragrance reads differently. Kept distinct
// from the side panel accordion (Scent Notes / Ingredients / How to Apply /
// Shipping) to avoid duplication.
export default function ProductFAQ({ product }: Props) {
  const { specs, name } = product

  const items = [
    {
      title: 'How long does it last?',
      content: `${name} is a ${specs.concentration.toLowerCase()}, with ${specs.longevity.toLowerCase()} longevity and ${specs.sillage.toLowerCase()} sillage. You can expect it to perform well through the day on skin, and noticeably longer on clothing.`,
    },
    {
      title: 'When is the best time to wear it?',
      content: `It's at its best in ${specs.season.toLowerCase()} and is well suited to ${specs.bestFor.toLowerCase()}. As an ${specs.concentration.toLowerCase()}, a light application carries comfortably without overwhelming.`,
    },
    {
      title: 'Can I try it before buying a full bottle?',
      content: (
        <>
          Yes. Our{' '}
          <Link
            href="/discovery-kit"
            className="text-gold-primary underline underline-offset-2 hover:text-gold-dark"
          >
            Discovery Kit
          </Link>{' '}
          lets you sample {name} and other Mazah fragrances at home, and the
          cost is credited toward your first full-size purchase.
        </>
      ),
    },
    {
      title: 'Is this an authentic Mazah fragrance?',
      content:
        'Every order ships directly from Mazah. Our fragrances are composed in-house and never sold through third-party marketplaces, so you always receive a genuine, fresh-batch bottle.',
    },
    {
      title: 'Can it be sent as a gift?',
      content:
        'Absolutely. Add complimentary gift wrapping at checkout and include a personalised note — we ship in unbranded outer packaging with no pricing enclosed.',
    },
    {
      title: 'What is your return policy?',
      content:
        'Returns are accepted within 30 days of delivery on unopened items. If something arrives damaged, contact us and we’ll make it right at no cost to you.',
    },
  ]

  return (
    <section
      id="faq"
      className="bg-cream border-t border-charcoal/10 scroll-mt-32"
    >
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="font-heading text-4xl text-charcoal mb-3 text-center">
          Frequently Asked <em>Questions</em>
        </h2>
        <p className="font-body text-sm text-muted mb-8 text-center">
          Everything you need to know before adding {name} to your collection.
        </p>
        <Accordion items={items} />
      </div>
    </section>
  )
}
