import { Restaurant } from '../types'

const BASE_URL = 'https://api-ebac.vercel.app/api/efood'

export const getRestaurants = async (): Promise<Restaurant[]> => {
  const response = await fetch(`${BASE_URL}/restaurantes`)
  if (!response.ok) {
    throw new Error('Erro ao buscar restaurantes')
  }
  return response.json()
}

export const getRestaurantById = async (id: number): Promise<Restaurant> => {
  const restaurants = await getRestaurants()
  const restaurant = restaurants.find((r) => r.id === id)
  if (!restaurant) {
    throw new Error(`Restaurante com id ${id} não encontrado`)
  }
  return restaurant
}
