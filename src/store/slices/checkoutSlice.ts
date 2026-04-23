import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DeliveryData, PaymentData } from '../../types'
import { RootState } from '../index'

export type CheckoutStep = 'cart' | 'delivery' | 'payment' | 'confirm'

interface CheckoutState {
  step: CheckoutStep
  deliveryData: DeliveryData | null
  paymentData: PaymentData | null
  orderId: string | null
}

const initialState: CheckoutState = {
  step: 'cart',
  deliveryData: null,
  paymentData: null,
  orderId: null,
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setStep(state, action: PayloadAction<CheckoutStep>) {
      state.step = action.payload
    },
    setDeliveryData(state, action: PayloadAction<DeliveryData>) {
      state.deliveryData = action.payload
    },
    setPaymentData(state, action: PayloadAction<PaymentData>) {
      state.paymentData = action.payload
    },
    setOrderId(state, action: PayloadAction<string>) {
      state.orderId = action.payload
    },
    resetCheckout(state) {
      state.step = 'cart'
      state.deliveryData = null
      state.paymentData = null
      state.orderId = null
    },
  },
})

export const {
  setStep,
  setDeliveryData,
  setPaymentData,
  setOrderId,
  resetCheckout,
} = checkoutSlice.actions

// Selectors
export const selectCheckoutStep = (state: RootState) => state.checkout.step
export const selectDeliveryData = (state: RootState) => state.checkout.deliveryData
export const selectPaymentData = (state: RootState) => state.checkout.paymentData
export const selectOrderId = (state: RootState) => state.checkout.orderId

export default checkoutSlice.reducer
