export default function CollectionsHero() {
  return (
    <section className="bg-hero-gradient pt-[128px] md:pt-[152px] pb-16 text-center relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 70% at 50% 50%, rgba(255,255,255,0.12) 0%, transparent 70%)',
        }}
      />
      <div className="relative z-10">
        <p className="font-body text-xs text-cream/70 uppercase tracking-[0.3em] mb-3">
          Home / Collections
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-white font-bold leading-tight">
          Our <em className="font-normal">Collections</em>
        </h1>
        <p className="font-body text-base text-cream/80 mt-4 max-w-md mx-auto px-6">
          Each fragrance is a chapter. Find yours.
        </p>
      </div>
    </section>
  )
}
