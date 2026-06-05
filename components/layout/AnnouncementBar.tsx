import { Truck, Gift, Globe } from 'lucide-react'

const MESSAGES = [
  { icon: Truck, text: 'Free shipping on orders over $100' },
  { icon: Gift, text: '15% off your first order — code WELCOME15' },
  { icon: Globe, text: 'Shipped to 120+ countries' },
]

export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-9 bg-charcoal text-cream flex items-center overflow-hidden">
      <div className="max-w-content mx-auto w-full px-4">
        {/* Desktop: three messages inline */}
        <div className="hidden md:flex items-center justify-center gap-8">
          {MESSAGES.map(({ icon: Icon, text }) => (
            <span
              key={text}
              className="flex items-center gap-2 font-body text-[11px] tracking-wider uppercase text-cream/90"
            >
              <Icon size={13} className="text-gold-light" />
              {text}
            </span>
          ))}
        </div>
        {/* Mobile: a marquee cycling the same messages */}
        <div className="md:hidden overflow-hidden">
          <div
            className="flex items-center gap-8 animate-marquee whitespace-nowrap"
            style={{ width: 'max-content' }}
          >
            {[...MESSAGES, ...MESSAGES].map(({ icon: Icon, text }, i) => (
              <span
                key={i}
                className="flex items-center gap-2 font-body text-[11px] tracking-wider uppercase text-cream/90"
              >
                <Icon size={13} className="text-gold-light" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
