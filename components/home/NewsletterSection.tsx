'use client'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function NewsletterSection() {
  return (
    <section className="bg-charcoal py-20">
      <div className="max-w-content mx-auto px-6">
        <div className="rounded-2xl bg-gradient-to-r from-charcoal via-[#2a1f0a] to-charcoal border border-gold-primary/20 p-10 md:p-16 text-center relative overflow-hidden">
          {/* Gold glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(200,150,42,0.14) 0%, transparent 70%)',
            }}
          />

          <ScrollReveal className="relative z-10 flex flex-col items-center gap-5">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-gold-primary">
              Welcome Offer
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white font-bold leading-tight">
              Get <em className="font-normal">15% off</em> your first order
            </h2>
            <p className="font-body text-sm text-cream/70 max-w-md leading-relaxed">
              Join 12,000+ fragrance lovers and unlock your welcome gift. Plus
              48-hour early access to every limited drop, before the public.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 w-full max-w-md mt-1"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                aria-label="Email address"
                className="flex-1 bg-white/10 border border-white/20 rounded-pill px-5 py-3 font-body text-sm text-cream placeholder-cream/40 focus:outline-none focus:border-gold-primary transition-colors"
              />
              <button
                type="submit"
                className="px-7 py-3 rounded-pill bg-gold-primary text-white font-body text-xs uppercase tracking-widest hover:bg-gold-light hover:text-charcoal transition-all whitespace-nowrap"
              >
                Claim 15% Off
              </button>
            </form>
            <p className="font-body text-[11px] text-cream/40">
              No spam — just early drops and the occasional gift. Unsubscribe anytime.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
