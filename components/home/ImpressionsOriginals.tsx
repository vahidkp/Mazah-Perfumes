import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const CARDS = [
  {
    title: 'Mazah Impressions',
    copy: 'Designer-inspired, premium-quality favorites.',
    href: '/collections?c=impressions',
    img: '/images/citrus-luxe-1.png',
    gradient: 'linear-gradient(120deg, #DDEBD6 0%, #C7DCC2 50%, #F3D9C0 100%)',
  },
  {
    title: 'Mazah Originals',
    copy: 'Exclusive fragrances crafted in France.',
    href: '/collections?c=originals',
    img: '/images/midnight-bloom-1.png',
    gradient: 'linear-gradient(120deg, #F7E0D2 0%, #F4C9D6 55%, #EAB7CE 100%)',
  },
]

export default function ImpressionsOriginals() {
  return (
    <section className="container-wide py-4 grid gap-4 md:grid-cols-2">
      {CARDS.map((c) => (
        <Link
          key={c.title}
          href={c.href}
          className="group relative overflow-hidden rounded-card aspect-[16/9] sm:aspect-[2/1] flex"
          style={{ background: c.gradient }}
        >
          <div className="relative z-10 p-6 sm:p-8 max-w-[55%]">
            <p className="font-display text-xl sm:text-2xl font-bold tracking-tightest">
              {c.title}
            </p>
            <p className="text-sm text-ink/70 mt-2">{c.copy}</p>
          </div>
          <Image
            src={c.img}
            alt={c.title}
            width={300}
            height={400}
            className="absolute right-2 sm:right-6 bottom-0 top-0 my-auto h-[88%] w-auto object-contain blend-multiply"
          />
          <span className="absolute bottom-5 right-5 z-10 w-10 h-10 rounded-full bg-paper grid place-items-center shadow-card transition-transform group-hover:translate-x-1">
            <ArrowRight size={18} />
          </span>
        </Link>
      ))}
    </section>
  )
}
