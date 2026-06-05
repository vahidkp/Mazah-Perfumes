'use client'
import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/lib/utils'
import Button from '@/components/ui/Button'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, total, count } =
    useCartStore()
  const drawerRef = useRef<HTMLDivElement>(null)

  // ESC to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [closeCart])

  // Focus trap + lock body scroll while open
  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    const drawer = drawerRef.current
    const focusable = drawer?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable?.[0]
    const last = focusable?.[focusable.length - 1]
    first?.focus()

    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !first || !last) return
      if (
        e.shiftKey
          ? document.activeElement === first
          : document.activeElement === last
      ) {
        e.preventDefault()
        ;(e.shiftKey ? last : first).focus()
      }
    }
    window.addEventListener('keydown', trap)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', trap)
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-charcoal/40 backdrop-blur-sm"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.aside
            ref={drawerRef}
            key="drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-[80] w-full sm:max-w-md
              bg-cream flex flex-col shadow-hover"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal/10">
              <h2 className="font-heading text-2xl text-charcoal">
                Your Cart
                {count > 0 && (
                  <span className="font-body text-sm text-muted font-normal ml-2">
                    ({count} {count === 1 ? 'item' : 'items'})
                  </span>
                )}
              </h2>
              <button
                onClick={closeCart}
                className="p-1.5 hover:text-gold-primary transition-colors"
                aria-label="Close cart"
              >
                <X size={22} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <ShoppingBag size={48} className="text-charcoal/20" />
                  <p className="font-heading text-2xl text-muted">
                    Your cart is empty
                  </p>
                  <p className="font-body text-sm text-muted/70">
                    Explore our collections to find your signature scent.
                  </p>
                  <Link href="/collections" onClick={closeCart}>
                    <Button variant="gold">Shop Now</Button>
                  </Link>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={`${item.productId}-${item.size}`}
                    className="flex gap-4 p-4 bg-white rounded-card shadow-card"
                  >
                    {/* Thumbnail */}
                    <div className="relative w-20 aspect-square rounded-lg overflow-hidden bg-gradient-to-b from-amber-50 to-amber-100 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-2"
                        sizes="80px"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="font-heading text-base text-charcoal leading-tight truncate">
                        {item.name}
                      </p>
                      <p className="font-body text-xs text-muted mt-0.5">
                        {item.size}ml
                      </p>

                      {/* Qty controls */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-charcoal/20 rounded-pill overflow-hidden">
                          <button
                            onClick={() =>
                              updateQty(item.productId, item.size, item.qty - 1)
                            }
                            className="px-3 py-1.5 hover:bg-cream/80 transition-colors text-charcoal"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-3 font-body text-sm">
                            {item.qty}
                          </span>
                          <button
                            onClick={() =>
                              updateQty(item.productId, item.size, item.qty + 1)
                            }
                            className="px-3 py-1.5 hover:bg-cream/80 transition-colors text-charcoal"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <p className="font-body text-base text-gold-primary font-semibold">
                          {formatPrice(item.price * item.qty)}
                        </p>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.productId, item.size)}
                      aria-label="Remove item"
                      className="self-start p-1 text-charcoal/30 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            {items.length > 0 && (
              <div className="border-t border-charcoal/10 px-6 py-6 space-y-4 bg-white">
                {/* Promo code */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Promo code"
                    className="flex-1 font-body text-sm border border-charcoal/20 rounded-pill px-4 py-2.5 focus:outline-none focus:border-gold-primary bg-cream"
                  />
                  <button className="px-5 py-2.5 rounded-pill border border-charcoal/20 font-body text-xs uppercase tracking-wider hover:border-gold-primary hover:text-gold-primary transition-all">
                    Apply
                  </button>
                </div>

                {/* Totals */}
                <div className="space-y-2">
                  <div className="flex justify-between font-body text-sm text-muted">
                    <span>Subtotal</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between font-body text-sm text-muted">
                    <span>Shipping</span>
                    <span className="text-green-600">
                      {total > 100 ? 'Free' : formatPrice(9.99)}
                    </span>
                  </div>
                  <div className="flex justify-between font-heading text-xl text-charcoal pt-2 border-t border-charcoal/10">
                    <span>Total</span>
                    <span className="font-body text-gold-primary font-semibold">
                      {formatPrice(total > 100 ? total : total + 9.99)}
                    </span>
                  </div>
                </div>

                <Link href="/checkout" onClick={closeCart} className="block">
                  <Button variant="gold" size="lg" className="w-full">
                    Checkout →
                  </Button>
                </Link>

                <button
                  onClick={closeCart}
                  className="w-full font-body text-xs text-muted uppercase tracking-wider hover:text-charcoal transition-colors py-2 text-center"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
