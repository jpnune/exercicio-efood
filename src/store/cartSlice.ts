import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Product } from '../models/Product'

export interface CartItem extends Product {
  quantity: number
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Product>) {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
      state.isOpen = true
    },
    incrementItem(state, action: PayloadAction<number>) {
      const item = state.items.find((i) => i.id === action.payload)
      if (item) {
        item.quantity += 1
      }
    },
    decrementItem(state, action: PayloadAction<number>) {
      const item = state.items.find((i) => i.id === action.payload)
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1
        } else {
          state.items = state.items.filter((i) => i.id !== action.payload)
        }
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearCart(state) {
      state.items = []
    },
    openCart(state) {
      state.isOpen = true
    },
    closeCart(state) {
      state.isOpen = false
    },
    toggleCart(state) {
      state.isOpen = !state.isOpen
    }
  }
})

export const {
  addItem,
  incrementItem,
  decrementItem,
  removeItem,
  clearCart,
  openCart,
  closeCart,
  toggleCart
} = cartSlice.actions

export default cartSlice.reducer
