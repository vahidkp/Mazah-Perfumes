import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const CATS = [
  { label: 'Women', href: '/collections?g=women', img: '/images/model-women.jpg', pos: 'object-center' },
  { label: 'Men', href: '/collections?g=men', img: '/images/model-men.jpg', pos: 'object-center' },
  { label: 'Unisex', href: '/collections?g=unisex', img: '/images/model-unisex.jpg', pos: 'object-top' },
]

export default function CategoryCards() {
  return (
    <section className="container-wide py-4 grid gap-4 sm:grid-cols-3">
      {CATS.map((c) => (
        <Link
          key={c.label}
          href={c.href}
          className="group relative overflow-hidden rounded-card aspect-[4/3] sm:aspect-[3/4]"
        >
          <Image
            src={c.img}
            alt={c.label}
            fill
            className={`object-cover ${c.pos} transition-transform duration-500 group-hover:scale-105`}
            sizes="(max-width:640px) 100vw, 33vw"
          />
          {/* Scrim darkest at the top (behind the label) with a touch at the
              bottom for the arrow button. */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/5 to-black/15" />
          <span className="absolute top-4 left-4 font-display text-lg font-bold uppercase tracking-wide text-paper drop-shadow-[0_1px_4px_rgba(0,0,0,0.55)]">
            {c.label}
          </span>
          <span className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-paper grid place-items-center shadow-card transition-transform group-hover:translate-x-1">
            <ArrowRight size={18} />
          </span>
        </Link>
      ))}
    </section>
  )
}
