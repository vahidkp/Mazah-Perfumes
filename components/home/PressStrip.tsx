import ScrollReveal from '@/components/ui/ScrollReveal'
import { PRESS_LOGOS } from './pressLogos'

export default function PressStrip() {
  return (
    <section className="bg-cream py-12 border-y border-charcoal/10">
      <div className="max-w-content mx-auto px-6">
        <ScrollReveal className="text-center">
          <p className="font-body text-[11px] uppercase tracking-[0.3em] text-muted mb-7">
            As Seen In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {PRESS_LOGOS.map((logo) => (
              <svg
                key={logo.key}
                viewBox={logo.viewBox}
                role="img"
                aria-label={logo.label}
                {...(logo.fill ? { fill: logo.fill } : {})}
                className="h-4 md:h-5 w-auto"
                dangerouslySetInnerHTML={{ __html: logo.inner }}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
