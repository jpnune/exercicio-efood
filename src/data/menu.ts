import type { Product } from '../models/Product'

import comida1 from '../assets/comidas/lulas_e_crustacios/19212e5cc7cdc705bcf5a9c1b9a620fc.jpg'
import comida2 from '../assets/comidas/porcoes/0beaa9d09b35c698de7467c5b450157f.jpg'
import comida3 from '../assets/comidas/salada/128bdb72e6aafb240cbe703853c36f88.jpg'
import bebida1 from '../assets/bebidas/20705e34db146fa6698572adbd4eb48e.jpg'
import bebida2 from '../assets/bebidas/3ca8216dc57d57d5c755ae4237fc1250.jpg'

export const menuComidas: Product[] = [
  {
    id: 1,
    nome: 'Prato Especial do Mar',
    descricao: 'Uma deliciosa combinação de frutos do mar frescos inspirada nas águas azuis.',
    foto: comida1,
    preco: 85.9,
    porcao: 'Serve 1 pessoa'
  },
  {
    id: 2,
    nome: 'Peixe Grelhado',
    descricao: 'Peixe fresco grelhado com ervas finas e acompanhamento de legumes.',
    foto: comida2,
    preco: 62.0,
    porcao: 'Serve 1 pessoa'
  },
  {
    id: 3,
    nome: 'Risoto de Camarão',
    descricao: 'Risoto cremoso com camarões selecionados e um toque de limão siciliano.',
    foto: comida3,
    preco: 78.0,
    porcao: 'Serve 1 pessoa'
  }
]

export const menuBebidas: Product[] = [
  {
    id: 4,
    nome: 'Suco Tropical Azul',
    descricao: 'Refrescante mistura de frutas tropicais com um toque oceânico.',
    foto: bebida1,
    preco: 15.0,
    porcao: '500ml'
  },
  {
    id: 5,
    nome: 'Drink da Casa',
    descricao: 'Coquetel especial com cores que remetem ao fundo do mar.',
    foto: bebida2,
    preco: 28.0,
    porcao: '300ml'
  }
]
