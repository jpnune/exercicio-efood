import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import { CartItem, Dish } from '../../types'
import { RootState } from '../index'

interface CartState {
  isOpen: boolean
  items: CartItem[]
}

const initialState: CartState = {
  isOpen: false,
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart(state) {
      state.isOpen = true
    },
    closeCart(state) {
      state.isOpen = false
    },
    addItem(state, action: PayloadAction<Dish>) {
      const existingItem = state.items.find(
        (item) => item.dish.id === action.payload.id
      )
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ dish: action.payload, quantity: 1 })
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(
        (item) => item.dish.id !== action.payload
      )
    },
    clearCart(state) {
      state.items = []
    },
  },
})

export const { openCart, closeCart, addItem, removeItem, clearCart } =
  cartSlice.actions

// Selectors
export const selectIsCartOpen = (state: RootState) => state.cart.isOpen
export const selectCartItems = (state: RootState) => state.cart.items

export const selectCartTotal = createSelector(selectCartItems, (items) =>
  items.reduce((total, item) => total + item.dish.preco * item.quantity, 0)
)

export const selectCartCount = createSelector(selectCartItems, (items) =>
  items.reduce((count, item) => count + item.quantity, 0)
)

export default cartSlice.reducer
