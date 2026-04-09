import type { Restaurant } from '../models/Restaurant'

import imgLulas from '../assets/comidas/lulas_e_crustacios/6f817603641bfa421fedca1e546c1f1e.jpg'
import imgPeixes from '../assets/comidas/peixes/043f32480aa2d07a029583d030793488.jpg'
import imgPorcoes from '../assets/comidas/porcoes/0beaa9d09b35c698de7467c5b450157f.jpg'
import imgSalada from '../assets/comidas/salada/128bdb72e6aafb240cbe703853c36f88.jpg'

export const mockRestaurants: Restaurant[] = [
  {
    id: 1,
    titulo: 'Lulas e Crustáceos',
    tipo: 'Frutos do Mar',
    descricao: 'Explore o sabor exótico de nossas lulas e crustáceos selecionados. Ingredientes frescos vindos diretamente do mar para o seu prato, preparados com técnicas exclusivas de alta gastronomia mediterrânea.',
    capa: imgLulas,
    avaliacao: 4.9,
    destacado: true
  },
  {
    id: 2,
    titulo: 'Peixes Selecionados',
    tipo: 'Especiais',
    descricao: 'A autêntica culinária litorânea com os melhores peixes da temporada. Filés suculentos e preparos leves que realçam o sabor natural de cada espécie. Uma experiência refrescante e inesquecível.',
    capa: imgPeixes,
    avaliacao: 4.8
  },
  {
    id: 3,
    titulo: 'Nossas Porções',
    tipo: 'Petiscos',
    descricao: 'O acompanhamento perfeito para seus momentos de descontração. Porções generosas de petiscos crocantes e acompanhamentos clássicos, ideais para compartilhar com amigos e família.',
    capa: imgPorcoes,
    avaliacao: 4.7
  },
  {
    id: 4,
    titulo: 'Saladas Frescas',
    tipo: 'Leves',
    descricao: 'Equilíbrio e saúde em cada garfada. Nossas saladas são compostas por folhas selecionadas, grãos nobres e molhos artesanais, garantindo uma refeição leve, nutritiva e cheia de frescor.',
    capa: imgSalada,
    avaliacao: 4.6
  }
]
