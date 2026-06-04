import ScrollReveal from '@/components/ui/ScrollReveal'
import Image from 'next/image'

const GALLERY = [
  { src: '/images/gallery-1.svg', className: 'col-span-2 row-span-2' },
  { src: '/images/gallery-2.svg', className: 'col-span-1' },
  { src: '/images/gallery-3.svg', className: 'col-span-1' },
  { src: '/images/gallery-4.svg', className: 'col-span-1' },
  { src: '/images/gallery-5.svg', className: 'col-span-1' },
]

export default function GallerySection() {
  return (
    <section className="max-w-content mx-auto px-6 py-20 md:py-24">
      <ScrollReveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-gold-primary mb-2">
            Gallery
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-charcoal">
            Elegance <em>in Every Detail</em>
          </h2>
        </div>
        <button className="self-start sm:self-auto font-body text-sm text-gold-primary uppercase tracking-wider hover:text-gold-muted transition-colors">
          Exclusive →
        </button>
      </ScrollReveal>

      <div className="grid grid-cols-4 grid-rows-2 gap-3 md:gap-4 h-[360px] md:h-[480px]">
        {GALLERY.map(({ src, className }, i) => (
          <ScrollReveal
            key={i}
            delay={i * 0.08}
            className={`${className} rounded-card overflow-hidden relative group`}
          >
            <Image
              src={src}
              alt={`Gallery image ${i + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width:768px) 50vw, 33vw"
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
