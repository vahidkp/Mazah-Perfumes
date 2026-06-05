'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Lock, Check, ShoppingBag } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/lib/utils'
import Button from '@/components/ui/Button'

export default function CheckoutPage() {
  const { items, total, clearCart } = useCartStore()
  const [placed, setPlaced] = useState(false)
  const shipping = total > 100 || total === 0 ? 0 : 9.99

  const placeOrder = (e: React.FormEvent) => {
    e.preventDefault()
    setPlaced(true)
    clearCart()
  }

  if (placed) {
    return (
      <div className="pt-[140px] md:pt-[160px] min-h-screen">
        <div className="max-w-lg mx-auto px-6 py-16 text-center">
          <span className="w-16 h-16 rounded-full bg-green-100 grid place-items-center mx-auto mb-6">
            <Check size={32} className="text-green-600" />
          </span>
          <h1 className="font-display text-4xl text-charcoal font-bold mb-3">
            Order confirmed
          </h1>
          <p className="font-body text-muted mb-8">
            Thank you — a confirmation has been sent to your email. This is a
            demo checkout, so no payment was taken.
          </p>
          <Link href="/collections">
            <Button variant="gold" size="lg">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="pt-[140px] md:pt-[160px] min-h-screen">
        <div className="max-w-lg mx-auto px-6 py-16 text-center">
          <ShoppingBag size={48} className="text-charcoal/20 mx-auto mb-6" />
          <h1 className="font-display text-3xl text-charcoal font-bold mb-3">
            Your cart is empty
          </h1>
          <p className="font-body text-muted mb-8">
            Add a fragrance to get started.
          </p>
          <Link href="/collections">
            <Button variant="gold" size="lg">
              Shop Fragrances
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-[120px] md:pt-[140px] min-h-screen bg-cream">
      <div className="max-w-content mx-auto px-6 py-10">
        <h1 className="font-display text-4xl text-charcoal font-bold mb-8">
          Checkout
        </h1>
        <div className="grid lg:grid-cols-[1fr_400px] gap-10 items-start">
          {/* Form */}
          <form onSubmit={placeOrder} className="flex flex-col gap-8">
            <fieldset className="flex flex-col gap-4">
              <legend className="font-heading text-xl text-charcoal mb-2">
                Contact &amp; Shipping
              </legend>
              <input required type="email" placeholder="Email address" className="checkout-input" />
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="First name" className="checkout-input" />
                <input required placeholder="Last name" className="checkout-input" />
              </div>
              <input required placeholder="Address" className="checkout-input" />
              <div className="grid sm:grid-cols-3 gap-4">
                <input required placeholder="City" className="checkout-input" />
                <input required placeholder="Postcode" className="checkout-input" />
                <input required placeholder="Country" className="checkout-input" />
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-4">
              <legend className="font-heading text-xl text-charcoal mb-2">
                Payment
              </legend>
              <input required placeholder="Card number" inputMode="numeric" className="checkout-input" />
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="MM / YY" className="checkout-input" />
                <input required placeholder="CVC" inputMode="numeric" className="checkout-input" />
              </div>
            </fieldset>

            <Button type="submit" variant="gold" size="lg" className="w-full">
              <Lock size={15} /> Place Order — {formatPrice(total + shipping)}
            </Button>
            <p className="font-body text-xs text-muted text-center -mt-2">
              Demo checkout — no real payment is processed.
            </p>
          </form>

          {/* Order summary */}
          <aside className="bg-white rounded-card shadow-card p-6 lg:sticky lg:top-28">
            <h2 className="font-heading text-xl text-charcoal mb-5">
              Order Summary
            </h2>
            <div className="flex flex-col gap-4 mb-5">
              {items.map((item) => (
                <div key={`${item.productId}-${item.size}`} className="flex gap-3">
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-gradient-to-b from-amber-50 to-amber-100 flex-shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-contain p-1.5" sizes="56px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-sm font-medium text-charcoal truncate">
                      {item.name}
                    </p>
                    <p className="font-body text-xs text-muted">
                      {item.size}ml · Qty {item.qty}
                    </p>
                  </div>
                  <p className="font-body text-sm text-charcoal">
                    {formatPrice(item.price * item.qty)}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-2 pt-4 border-t border-charcoal/10">
              <div className="flex justify-between font-body text-sm text-muted">
                <span>Subtotal</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between font-body text-sm text-muted">
                <span>Shipping</span>
                <span className="text-green-600">
                  {shipping === 0 ? 'Free' : formatPrice(shipping)}
                </span>
              </div>
              <div className="flex justify-between font-heading text-xl text-charcoal pt-2 border-t border-charcoal/10">
                <span>Total</span>
                <span className="font-body text-gold-primary font-semibold">
                  {formatPrice(total + shipping)}
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
