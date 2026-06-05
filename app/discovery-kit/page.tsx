import type { Metadata } from 'next'
import DiscoveryKit from '@/components/product/DiscoveryKit'

export const metadata: Metadata = {
  title: 'Discovery Kit — Mazah Perfume',
  description:
    'Try before you commit. Six 2ml Mazah samples for $19 — and the cost is credited toward your first full bottle.',
}

export default function DiscoveryKitPage() {
  return (
    <div className="pt-[120px] md:pt-[140px]">
      <DiscoveryKit />
    </div>
  )
}
