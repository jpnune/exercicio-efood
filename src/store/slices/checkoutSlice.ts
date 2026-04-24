import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DeliveryData, PaymentData } from '../../types'
import { RootState } from '../index'

export type CheckoutStep = 'cart' | 'delivery' | 'payment' | 'confirm'

interface CheckoutState {
  step: CheckoutStep
  deliveryData: DeliveryData | null
  paymentData: PaymentData | null
  orderId: string | null
  isLoading: boolean
  apiError: string | null
}

const initialState: CheckoutState = {
  step: 'cart',
  deliveryData: null,
  paymentData: null,
  orderId: null,
  isLoading: false,
  apiError: null,
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
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setApiError(state, action: PayloadAction<string | null>) {
      state.apiError = action.payload
    },
    resetCheckout(state) {
      state.step = 'cart'
      state.deliveryData = null
      state.paymentData = null
      state.orderId = null
      state.isLoading = false
      state.apiError = null
    },
  },
})

export const {
  setStep,
  setDeliveryData,
  setPaymentData,
  setOrderId,
  setLoading,
  setApiError,
  resetCheckout,
} = checkoutSlice.actions

// Selectors
export const selectCheckoutStep = (state: RootState) => state.checkout.step
export const selectDeliveryData = (state: RootState) => state.checkout.deliveryData
export const selectPaymentData = (state: RootState) => state.checkout.paymentData
export const selectOrderId = (state: RootState) => state.checkout.orderId
export const selectIsLoading = (state: RootState) => state.checkout.isLoading
export const selectApiError = (state: RootState) => state.checkout.apiError

export default checkoutSlice.reducer
