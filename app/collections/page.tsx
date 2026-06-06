import type { Metadata } from 'next'
import { Suspense } from 'react'
import CollectionView from '@/components/collections/CollectionView'

export const metadata: Metadata = {
  title: 'All Perfumes — Mazah',
  description:
    'Browse 100+ designer-inspired Impressions and Mazah Originals perfumes, developed in France.',
}

export default function CollectionsPage() {
  return (
    <Suspense fallback={<div className="container-wide py-24" />}>
      <CollectionView />
    </Suspense>
  )
}
