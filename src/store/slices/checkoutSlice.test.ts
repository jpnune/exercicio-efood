import checkoutReducer, {
  setStep,
  setDeliveryData,
  setPaymentData,
  setOrderId,
  resetCheckout,
  selectCheckoutStep,
  selectDeliveryData,
} from './checkoutSlice'
import { DeliveryData } from '../../types'

const initialState = {
  step: 'cart' as const,
  deliveryData: null,
  paymentData: null,
  orderId: null,
}

const mockDelivery: DeliveryData = {
  receiver: 'João Paulo',
  address: 'Rua das Flores, 123',
  city: 'São Paulo',
  zipCode: '01310-100',
  number: '123',
  complement: 'Apto 42',
  phone: '(11) 99999-8888',
}

describe('checkoutSlice', () => {
  describe('setStep', () => {
    it('deve mudar o step para delivery', () => {
      const state = checkoutReducer(initialState, setStep('delivery'))
      expect(state.step).toBe('delivery')
    })

    it('deve mudar o step para payment', () => {
      const state = checkoutReducer(initialState, setStep('payment'))
      expect(state.step).toBe('payment')
    })

    it('deve mudar o step para confirm', () => {
      const state = checkoutReducer(initialState, setStep('confirm'))
      expect(state.step).toBe('confirm')
    })

    it('deve voltar o step para cart', () => {
      const paymentState = checkoutReducer(initialState, setStep('payment'))
      const state = checkoutReducer(paymentState, setStep('cart'))
      expect(state.step).toBe('cart')
    })
  })

  describe('setDeliveryData', () => {
    it('deve salvar os dados de entrega', () => {
      const state = checkoutReducer(initialState, setDeliveryData(mockDelivery))
      expect(state.deliveryData).toEqual(mockDelivery)
    })
  })

  describe('setOrderId', () => {
    it('deve salvar o orderId', () => {
      const state = checkoutReducer(initialState, setOrderId('ORDER-123'))
      expect(state.orderId).toBe('ORDER-123')
    })
  })

  describe('resetCheckout', () => {
    it('deve resetar para o estado inicial', () => {
      let state = checkoutReducer(initialState, setStep('confirm'))
      state = checkoutReducer(state, setDeliveryData(mockDelivery))
      state = checkoutReducer(state, setOrderId('ORDER-123'))
      state = checkoutReducer(state, resetCheckout())

      expect(state.step).toBe('cart')
      expect(state.deliveryData).toBeNull()
      expect(state.paymentData).toBeNull()
      expect(state.orderId).toBeNull()
    })
  })

  describe('selectors', () => {
    const rootState = {
      cart: { isOpen: false, items: [] },
      checkout: { ...initialState, step: 'delivery' as const, deliveryData: mockDelivery },
    }

    it('selectCheckoutStep deve retornar o step atual', () => {
      expect(selectCheckoutStep(rootState)).toBe('delivery')
    })

    it('selectDeliveryData deve retornar os dados de entrega', () => {
      expect(selectDeliveryData(rootState)).toEqual(mockDelivery)
    })
  })
})
