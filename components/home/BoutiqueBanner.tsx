import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function BoutiqueBanner() {
  return (
    <section className="container-wide py-4">
      <div className="grid sm:grid-cols-[1.4fr_1fr] rounded-card overflow-hidden bg-card">
        <div className="p-7 sm:p-10 flex flex-col justify-center">
          <p className="font-display text-xl sm:text-2xl tracking-tightest">
            Visit our boutiques for the perfect{' '}
            <strong className="font-bold">Father&apos;s Day pairing.</strong>
          </p>
          <p className="text-sm text-muted mt-2">
            Free gift with your purchase. IRL only. Ends June 21st!
          </p>
          <div className="mt-5">
            <Button href="/about" variant="solid" size="md">
              Find a Boutique
            </Button>
          </div>
        </div>
        <div className="relative min-h-[160px] sm:min-h-0">
          <Image
            src="/images/gift-set.jpg"
            alt="Mazah perfume gift set"
            fill
            className="object-cover"
            sizes="(max-width:640px) 100vw, 40vw"
          />
        </div>
      </div>
    </section>
  )
}
