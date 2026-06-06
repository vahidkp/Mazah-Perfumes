import Image from 'next/image'
import Link from 'next/link'

export default function NextGenBanner() {
  return (
    <section className="mt-8">
      <div
        className="relative overflow-hidden"
        style={{
          background:
            'linear-gradient(120deg, #7E9DB8 0%, #94B0C5 45%, #B4C8D6 100%)',
        }}
      >
        <div className="container-wide grid md:grid-cols-2 gap-6 items-center min-h-[420px] md:min-h-[520px] py-12">
          {/* Copy */}
          <div className="relative z-10 text-paper">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.02] tracking-tightest">
              THE PERFUME HOUSE
              <br />
              FOR THE NEXT
              <br />
              GENERATION
              <sup className="text-base align-super">®</sup>
            </h2>
            <p className="text-sm sm:text-base text-paper/85 mt-5 max-w-md">
              Premium-quality French fragrances. No excessive markups. Crafted
              with heart, not ego.
            </p>
            <Link
              href="/about"
              className="inline-block mt-5 text-sm font-medium text-paper underline underline-offset-4"
            >
              About Us
            </Link>
            {/* Decorative carousel dots */}
            <div className="flex gap-2 mt-10">
              <span className="w-2 h-2 rounded-full bg-paper" />
              <span className="w-2 h-2 rounded-full bg-paper/40" />
              <span className="w-2 h-2 rounded-full bg-paper/40" />
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[280px] md:h-[440px]">
            <Image
              src="/images/ocean-whisper-1.png"
              alt="Mazah fragrance"
              fill
              className="object-contain blend-multiply"
              sizes="(max-width:768px) 80vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
