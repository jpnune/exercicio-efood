import cartReducer, {
  addItem,
  removeItem,
  clearCart,
  openCart,
  closeCart,
  selectCartTotal,
  selectCartCount,
} from './cartSlice'
import { CartItem, Dish } from '../../types'

const mockDish: Dish = {
  id: 1,
  nome: 'Pizza Margherita',
  descricao: 'Clássica pizza italiana',
  foto: 'pizza.jpg',
  preco: 49.9,
  porcao: '1 a 2 pessoas',
}

const mockDish2: Dish = {
  id: 2,
  nome: 'Spaghetti Carbonara',
  descricao: 'Massa italiana com bacon',
  foto: 'spaghetti.jpg',
  preco: 56.9,
  porcao: '1 a 2 pessoas',
}

const initialState = { isOpen: false, items: [] as CartItem[] }

describe('cartSlice', () => {
  describe('openCart / closeCart', () => {
    it('deve abrir o carrinho', () => {
      const state = cartReducer(initialState, openCart())
      expect(state.isOpen).toBe(true)
    })

    it('deve fechar o carrinho', () => {
      const openedState = { ...initialState, isOpen: true }
      const state = cartReducer(openedState, closeCart())
      expect(state.isOpen).toBe(false)
    })
  })

  describe('addItem', () => {
    it('deve adicionar um novo item ao carrinho', () => {
      const state = cartReducer(initialState, addItem(mockDish))
      expect(state.items).toHaveLength(1)
      expect(state.items[0].dish.id).toBe(mockDish.id)
      expect(state.items[0].quantity).toBe(1)
    })

    it('deve incrementar a quantidade se o item já existir', () => {
      const stateWithItem = cartReducer(initialState, addItem(mockDish))
      const state = cartReducer(stateWithItem, addItem(mockDish))
      expect(state.items).toHaveLength(1)
      expect(state.items[0].quantity).toBe(2)
    })

    it('deve adicionar múltiplos itens diferentes', () => {
      let state = cartReducer(initialState, addItem(mockDish))
      state = cartReducer(state, addItem(mockDish2))
      expect(state.items).toHaveLength(2)
    })
  })

  describe('removeItem', () => {
    it('deve remover um item pelo id', () => {
      let state = cartReducer(initialState, addItem(mockDish))
      state = cartReducer(state, removeItem(mockDish.id))
      expect(state.items).toHaveLength(0)
    })

    it('não deve afetar outros itens ao remover', () => {
      let state = cartReducer(initialState, addItem(mockDish))
      state = cartReducer(state, addItem(mockDish2))
      state = cartReducer(state, removeItem(mockDish.id))
      expect(state.items).toHaveLength(1)
      expect(state.items[0].dish.id).toBe(mockDish2.id)
    })
  })

  describe('clearCart', () => {
    it('deve esvaziar completamente o carrinho', () => {
      let state = cartReducer(initialState, addItem(mockDish))
      state = cartReducer(state, addItem(mockDish2))
      state = cartReducer(state, clearCart())
      expect(state.items).toHaveLength(0)
    })
  })

  describe('selectors', () => {
    const stateWithItems = {
      cart: {
        isOpen: false,
        items: [
          { dish: mockDish, quantity: 2 },
          { dish: mockDish2, quantity: 1 },
        ],
      },
      checkout: {
        step: 'cart' as const,
        deliveryData: null,
        paymentData: null,
        orderId: null,
      },
    }

    it('selectCartTotal deve calcular o total corretamente', () => {
      // 49.90 * 2 + 56.90 * 1 = 156.70
      const total = selectCartTotal(stateWithItems)
      expect(total).toBeCloseTo(156.7)
    })

    it('selectCartCount deve retornar a soma das quantidades', () => {
      const count = selectCartCount(stateWithItems)
      expect(count).toBe(3)
    })
  })
})
