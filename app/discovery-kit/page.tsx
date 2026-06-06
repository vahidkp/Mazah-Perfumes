import type { Metadata } from 'next'
import DiscoveryKit from '@/components/product/DiscoveryKit'

export const metadata: Metadata = {
  title: 'Discovery Kit — Mazah',
  description:
    'Try before you commit. Six 2ml Mazah samples for $19 — and the cost is credited toward your first full bottle.',
}

export default function DiscoveryKitPage() {
  return <DiscoveryKit />
}
