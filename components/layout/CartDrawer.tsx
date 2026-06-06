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

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [closeCart])

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

  const freeShip = total > 100

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-ink/40 backdrop-blur-sm"
            onClick={closeCart}
          />

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
            className="fixed right-0 top-0 bottom-0 z-[95] w-full sm:max-w-md bg-paper flex flex-col shadow-pop"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-line">
              <h2 className="font-display text-lg font-bold">
                Your Cart
                {count > 0 && (
                  <span className="text-sm text-muted font-normal ml-2">
                    ({count} {count === 1 ? 'item' : 'items'})
                  </span>
                )}
              </h2>
              <button
                onClick={closeCart}
                className="p-1.5 hover:text-coral transition-colors"
                aria-label="Close cart"
              >
                <X size={22} />
              </button>
            </div>

            {/* Free-shipping progress */}
            {count > 0 && (
              <div className="px-6 py-3 bg-card text-xs text-muted">
                {freeShip ? (
                  <span className="text-green-700 font-medium">
                    🎉 You&apos;ve unlocked FREE shipping!
                  </span>
                ) : (
                  <>
                    You&apos;re {formatPrice(100 - total)} away from{' '}
                    <span className="font-medium text-ink">FREE shipping</span>.
                  </>
                )}
              </div>
            )}

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <ShoppingBag size={44} className="text-line" />
                  <p className="font-display text-xl font-bold text-muted">
                    Your cart is empty
                  </p>
                  <p className="text-sm text-muted/80">
                    Explore our perfumes to find your signature scent.
                  </p>
                  <Link href="/collections" onClick={closeCart} className="btn-solid">
                    Shop All
                  </Link>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={`${item.productId}-${item.size}`}
                    className="flex gap-4 p-3 rounded-card border border-line"
                  >
                    <div className="relative w-20 aspect-square rounded-lg overflow-hidden bg-card flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-1.5 blend-multiply"
                        sizes="80px"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="font-display text-sm font-semibold leading-tight truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted mt-0.5">{item.size}ML</p>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-line rounded-pill overflow-hidden">
                          <button
                            onClick={() =>
                              updateQty(item.productId, item.size, item.qty - 1)
                            }
                            className="px-3 py-1.5 hover:bg-card transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-3 text-sm tabular-nums">
                            {item.qty}
                          </span>
                          <button
                            onClick={() =>
                              updateQty(item.productId, item.size, item.qty + 1)
                            }
                            className="px-3 py-1.5 hover:bg-card transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <p className="text-sm font-semibold">
                          {formatPrice(item.price * item.qty)}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => removeItem(item.productId, item.size)}
                      aria-label="Remove item"
                      className="self-start p-1 text-faint hover:text-coral transition-colors"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            {items.length > 0 && (
              <div className="border-t border-line px-6 py-6 space-y-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Promo code"
                    aria-label="Promo code"
                    className="flex-1 text-sm border border-line rounded-pill px-4 py-2.5 focus:outline-none focus:border-ink/40 bg-card"
                  />
                  <button className="px-5 py-2.5 rounded-pill border border-line text-xs uppercase tracking-wider hover:border-ink transition-all">
                    Apply
                  </button>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-muted">
                    <span>Subtotal</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted">
                    <span>Shipping</span>
                    <span className={freeShip ? 'text-green-700' : ''}>
                      {freeShip ? 'Free' : formatPrice(9.99)}
                    </span>
                  </div>
                  <div className="flex justify-between font-display text-lg font-bold pt-2 border-t border-line">
                    <span>Total</span>
                    <span>{formatPrice(freeShip ? total : total + 9.99)}</span>
                  </div>
                </div>

                <Button
                  href="/checkout"
                  size="lg"
                  className="w-full"
                >
                  Checkout
                </Button>
                <button
                  onClick={closeCart}
                  className="w-full text-xs text-muted uppercase tracking-wider hover:text-ink transition-colors py-1 text-center"
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
