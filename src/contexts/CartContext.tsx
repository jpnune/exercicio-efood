import { createContext, useContext, useState, useCallback } from 'react'
import type { ReactNode } from 'react'
import type { Product } from '../models/Product'

export interface CartItem extends Product {
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  isOpen: boolean
  addItem: (product: Product) => void
  removeItem: (productId: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  totalPrice: number
  totalItems: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((product: Product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((productId: number) => {
    setItems((prev) => prev.filter((item) => item.id !== productId))
  }, [])

  const clearCart = useCallback(() => setItems([]), [])
  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((prev) => !prev), [])

  const totalPrice = items.reduce(
    (sum, item) => sum + item.preco * item.quantity,
    0
  )

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        addItem,
        removeItem,
        clearCart,
        openCart,
        closeCart,
        toggleCart,
        totalPrice,
        totalItems
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = (): CartContextType => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider')
  }
  return context
}
