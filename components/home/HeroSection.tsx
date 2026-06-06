import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden lg:-mt-[72px]">
      <div className="relative min-h-[calc(100dvh-100px)] lg:min-h-screen">
        {/* Full-bleed hero: bottles floating over a honey pool */}
        <Image
          src="/images/hero-honey.jpg"
          alt="Mazah perfume bottles floating over golden honey"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Cream scrim toward the lower-left keeps the dark headline legible */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#f2e3c2]/90 via-[#f2e3c2]/15 to-transparent" />

        {/* Copy — kept clear of the floating nav via bottom alignment */}
        <div className="relative container-wide flex items-end pb-12 sm:pb-16 min-h-[calc(100dvh-100px)] lg:min-h-screen">
          <div className="max-w-xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] tracking-tightest text-ink leading-[1.04]">
              Smell into
              <br />
              <strong className="font-extrabold">The Future of Fragrance.</strong>
            </h1>
            <div className="flex flex-wrap gap-3 mt-7">
              <Button
                href="/collections?tab=bestsellers"
                size="lg"
                className="!text-xs uppercase tracking-[0.08em]"
              >
                Shop Bestsellers
              </Button>
              <Button
                href="/collections"
                variant="outline"
                size="lg"
                className="!text-xs uppercase tracking-[0.08em]"
              >
                Shop All
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
