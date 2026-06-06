'use client'
import { useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export default function PromoTab() {
  const [open, setOpen] = useState(true)
  if (!open) return null
  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2 bg-ink text-paper rounded-pill pl-4 pr-2 py-2 shadow-pop text-xs font-semibold">
      <Link href="/discovery-kit" className="flex items-center gap-2">
        🏷️ Get up to 30% OFF
      </Link>
      <button
        onClick={() => setOpen(false)}
        aria-label="Dismiss"
        className="p-1 hover:opacity-70"
      >
        <X size={14} />
      </button>
    </div>
  )
}
