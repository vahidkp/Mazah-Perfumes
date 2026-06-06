import Link from 'next/link'
import { Info } from 'lucide-react'

export default function AnnouncementBar() {
  return (
    <div className="bg-ink text-paper">
      <div className="container-wide h-9 flex items-center justify-between text-[11px] sm:text-xs font-body">
        {/* Left message */}
        <span className="hidden md:flex items-center gap-1.5 whitespace-nowrap">
          Free 3ml samples with Mazah+
          <Link href="/discovery-kit" className="underline underline-offset-2">
            Learn more
          </Link>
        </span>

        {/* Center message — marquee on mobile, centered on desktop */}
        <div className="flex-1 md:flex-none md:absolute md:left-1/2 md:-translate-x-1/2 overflow-hidden">
          <span className="flex items-center justify-center gap-1.5 whitespace-nowrap">
            Mazah+ Member: Up to 30% OFF + FREE shipping + FREE perfume
            <Info size={12} className="opacity-70" />
          </span>
        </div>

        {/* Right spacer (desktop) */}
        <span className="hidden md:block w-[180px]" />
      </div>
    </div>
  )
}
