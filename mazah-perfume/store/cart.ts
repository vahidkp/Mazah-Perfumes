import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CartItem } from '@/types'

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  addItem: (item: CartItem) => void
  removeItem: (productId: string, size: number) => void
  updateQty: (productId: string, size: number, qty: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  get total(): number
  get count(): number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (incoming) =>
        set((state) => {
          const existing = state.items.find(
            (i) => i.productId === incoming.productId && i.size === incoming.size
          )
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.productId === incoming.productId && i.size === incoming.size
                  ? { ...i, qty: i.qty + incoming.qty }
                  : i
              ),
              isOpen: true,
            }
          }
          return { items: [...state.items, incoming], isOpen: true }
        }),

      removeItem: (productId, size) =>
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.productId === productId && i.size === size)
          ),
        })),

      updateQty: (productId, size, qty) =>
        set((state) => ({
          items:
            qty <= 0
              ? state.items.filter(
                  (i) => !(i.productId === productId && i.size === size)
                )
              : state.items.map((i) =>
                  i.productId === productId && i.size === size
                    ? { ...i, qty }
                    : i
                ),
        })),

      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      get total() {
        return get().items.reduce((sum, i) => sum + i.price * i.qty, 0)
      },
      get count() {
        return get().items.reduce((sum, i) => sum + i.qty, 0)
      },
    }),
    {
      name: 'mazah-cart',
      partialize: (state) => ({ items: state.items }),
    }
  )
)
