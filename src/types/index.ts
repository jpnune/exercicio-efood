export interface Dish {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

export interface Restaurant {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Dish[]
}

export interface CartItem {
  dish: Dish
  quantity: number
}

export interface DeliveryData {
  receiver: string
  address: string
  city: string
  zipCode: string
  number: string
  complement?: string
  phone: string
}

export interface PaymentData {
  cardName: string
  cardNumber: string
  cvv: string
  expiryMonth: string
  expiryYear: string
  cpf: string
}

export interface OrderPayload {
  products: { id: number; price: number }[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

export interface OrderResponse {
  orderId: string
}
