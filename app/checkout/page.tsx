'use client'
import { useState } from 'react'
import Image from 'next/image'
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
      <div className="min-h-screen">
        <div className="max-w-lg mx-auto px-6 py-20 text-center">
          <span className="w-16 h-16 rounded-full bg-green-100 grid place-items-center mx-auto mb-6">
            <Check size={32} className="text-green-600" />
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tightest mb-3">
            Order confirmed
          </h1>
          <p className="text-muted mb-8">
            Thank you — a confirmation has been sent to your email. This is a demo
            checkout, so no payment was taken.
          </p>
          <Button href="/collections" size="lg">Continue Shopping</Button>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <div className="max-w-lg mx-auto px-6 py-20 text-center">
          <ShoppingBag size={48} className="text-line mx-auto mb-6" />
          <h1 className="font-display text-2xl font-bold tracking-tightest mb-3">
            Your cart is empty
          </h1>
          <p className="text-muted mb-8">Add a fragrance to get started.</p>
          <Button href="/collections" size="lg">Shop All</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-canvas">
      <div className="container-page py-10">
        <h1 className="font-display text-3xl font-bold tracking-tightest mb-8">
          Checkout
        </h1>
        <div className="grid lg:grid-cols-[1fr_400px] gap-10 items-start">
          {/* Form */}
          <form onSubmit={placeOrder} className="flex flex-col gap-8">
            <fieldset className="flex flex-col gap-4">
              <legend className="font-display text-lg font-bold mb-2">
                Contact &amp; Shipping
              </legend>
              <input required type="email" placeholder="Email address" aria-label="Email address" className="checkout-input" />
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="First name" aria-label="First name" className="checkout-input" />
                <input required placeholder="Last name" aria-label="Last name" className="checkout-input" />
              </div>
              <input required placeholder="Address" aria-label="Street address" className="checkout-input" />
              <div className="grid sm:grid-cols-3 gap-4">
                <input required placeholder="City" aria-label="City" className="checkout-input" />
                <input required placeholder="Postcode" aria-label="Postcode" className="checkout-input" />
                <input required placeholder="Country" aria-label="Country" className="checkout-input" />
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-4">
              <legend className="font-display text-lg font-bold mb-2">Payment</legend>
              <input required placeholder="Card number" aria-label="Card number" inputMode="numeric" className="checkout-input" />
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="MM / YY" aria-label="Card expiry date" className="checkout-input" />
                <input required placeholder="CVC" aria-label="Card security code" inputMode="numeric" className="checkout-input" />
              </div>
            </fieldset>

            <Button type="submit" size="lg" className="w-full">
              <Lock size={15} /> Place Order — {formatPrice(total + shipping)}
            </Button>
            <p className="text-xs text-muted text-center -mt-2">
              Demo checkout — no real payment is processed.
            </p>
          </form>

          {/* Order summary */}
          <aside className="bg-paper rounded-card border border-line p-6 lg:sticky lg:top-20">
            <h2 className="font-display text-lg font-bold mb-5">Order Summary</h2>
            <div className="flex flex-col gap-4 mb-5">
              {items.map((item) => (
                <div key={`${item.productId}-${item.size}`} className="flex gap-3">
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-card flex-shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-contain p-1.5 blend-multiply" sizes="56px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{item.name}</p>
                    <p className="text-xs text-muted">{item.size}ML · Qty {item.qty}</p>
                  </div>
                  <p className="text-sm">{formatPrice(item.price * item.qty)}</p>
                </div>
              ))}
            </div>
            <div className="space-y-2 pt-4 border-t border-line">
              <div className="flex justify-between text-sm text-muted">
                <span>Subtotal</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between text-sm text-muted">
                <span>Shipping</span>
                <span className={shipping === 0 ? 'text-green-700' : ''}>
                  {shipping === 0 ? 'Free' : formatPrice(shipping)}
                </span>
              </div>
              <div className="flex justify-between font-display text-lg font-bold pt-2 border-t border-line">
                <span>Total</span>
                <span>{formatPrice(total + shipping)}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
