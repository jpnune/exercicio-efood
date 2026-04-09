import type { Product } from '../models/Product'

// === Lulas e Crustáceos (6 imagens) ===
import lula1 from '../assets/comidas/lulas_e_crustacios/19212e5cc7cdc705bcf5a9c1b9a620fc.jpg'
import lula2 from '../assets/comidas/lulas_e_crustacios/48c72361e36df103f50ba05e8d811c23.jpg'
import lula3 from '../assets/comidas/lulas_e_crustacios/596a067e5e7af5a052129c0f40bc22e4.jpg'
import lula4 from '../assets/comidas/lulas_e_crustacios/6f817603641bfa421fedca1e546c1f1e.jpg'
import lula5 from '../assets/comidas/lulas_e_crustacios/d9694c5a6c2fa80a0fd5ee8e806d0a2c.jpg'
import lula6 from '../assets/comidas/lulas_e_crustacios/edcb3adfdb7fcfc59ca5877ecf80c3c0.jpg'

// === Peixes (10 imagens) ===
import peixe1 from '../assets/comidas/peixes/043f32480aa2d07a029583d030793488.jpg'
import peixe2 from '../assets/comidas/peixes/311659af423495bdc1c58a43fcf4948a.jpg'
import peixe3 from '../assets/comidas/peixes/4dd68b601cf4b5dc47244668688ebe06.jpg'
import peixe4 from '../assets/comidas/peixes/5e373b1aa052ee89ff1cbe20f52f0b9b.jpg'
import peixe5 from '../assets/comidas/peixes/5ec8e8a97b34698c4624ff27a4472eb1.jpg'
import peixe6 from '../assets/comidas/peixes/6a82ccdb0aa11f4ca57ec4c6ceaf7282.jpg'
import peixe7 from '../assets/comidas/peixes/ab2b6f23f0531155d9eb581b64d8af44.jpg'
import peixe8 from '../assets/comidas/peixes/b600cad697a5039dfb01aede38fe49fa.jpg'
import peixe9 from '../assets/comidas/peixes/d0d79cc7c5971f32d1a2273fafabfd48.jpg'
import peixe10 from '../assets/comidas/peixes/df7577361f24a1dfeb6b3c7f56c1556f.jpg'

// === Porções (5 imagens) ===
import porcao1 from '../assets/comidas/porcoes/0beaa9d09b35c698de7467c5b450157f.jpg'
import porcao2 from '../assets/comidas/porcoes/2d18476b8538ff8f764354c28d9da11c.jpg'
import porcao3 from '../assets/comidas/porcoes/5cbc066bce1fca8cffd2b7517919d3c8.jpg'
import porcao4 from '../assets/comidas/porcoes/b3b7e2d48f8d3133d5537b525778c5a5.jpg'
import porcao5 from '../assets/comidas/porcoes/fc3c7b811dd478f125a8ada6ce16af2a.jpg'

// === Saladas (3 imagens) ===
import salada1 from '../assets/comidas/salada/128bdb72e6aafb240cbe703853c36f88.jpg'
import salada2 from '../assets/comidas/salada/3a0cc171ee7385421eb530bc457574d6.jpg'
import salada3 from '../assets/comidas/salada/ef9e07db581d4cba2f9e3e1bec439c86.jpg'

// Mapeamento: id do restaurante → lista de produtos
export const categoryProductsMap: Record<number, Product[]> = {
  // Lulas e Crustáceos
  1: [
    { id: 101, nome: 'Lula Grelhada', descricao: 'Lula fresca grelhada com limão e ervas finas, acompanhada de molho especial da casa.', foto: lula1, preco: 68.90, porcao: 'Serve 1 pessoa' },
    { id: 102, nome: 'Camarão Empanado', descricao: 'Camarões selecionados empanados e fritos na hora, servidos com molho tártaro artesanal.', foto: lula2, preco: 72.50, porcao: 'Serve 1 pessoa' },
    { id: 103, nome: 'Polvo à Vinagrete', descricao: 'Tentáculos de polvo macios cozidos lentamente com vinagrete fresco e aromático.', foto: lula3, preco: 89.00, porcao: 'Serve 2 pessoas' },
    { id: 104, nome: 'Risoto de Frutos do Mar', descricao: 'Risoto cremoso com camarões, lulas e mariscos, finalizado com azeite trufado.', foto: lula4, preco: 95.00, porcao: 'Serve 2 pessoas' },
    { id: 105, nome: 'Caldeirada de Crustáceos', descricao: 'Ensopado rico e aromático com variedade de crustáceos frescos em caldo de açafrão.', foto: lula5, preco: 110.00, porcao: 'Serve 2 pessoas' },
    { id: 106, nome: 'Lagosta Thermidor', descricao: 'Meia lagosta gratinada com molho cremoso de mostarda e queijo, uma iguaria clássica.', foto: lula6, preco: 145.00, porcao: 'Serve 1 pessoa' }
  ],

  // Peixes Selecionados
  2: [
    { id: 201, nome: 'Salmão Grelhado', descricao: 'Filé de salmão grelhado com crosta de ervas, acompanhado de purê de batata doce.', foto: peixe1, preco: 78.90, porcao: 'Serve 1 pessoa' },
    { id: 202, nome: 'Atum Selado', descricao: 'Atum fresco selado ao ponto com gergelim, servido com molho ponzu e wasabi.', foto: peixe2, preco: 85.00, porcao: 'Serve 1 pessoa' },
    { id: 203, nome: 'Tilápia ao Molho de Maracujá', descricao: 'Filé de tilápia grelhado banhado em molho agridoce de maracujá fresco.', foto: peixe3, preco: 55.90, porcao: 'Serve 1 pessoa' },
    { id: 204, nome: 'Robalo Assado', descricao: 'Robalo inteiro assado no forno com legumes da estação e azeite de ervas.', foto: peixe4, preco: 98.00, porcao: 'Serve 2 pessoas' },
    { id: 205, nome: 'Bacalhau à Brás', descricao: 'Clássico bacalhau desfiado com batata palha, ovos e azeitonas pretas portuguesas.', foto: peixe5, preco: 105.00, porcao: 'Serve 2 pessoas' },
    { id: 206, nome: 'Peixe Espada Grelhado', descricao: 'Posta de peixe espada grelhada com manteiga de limão e alcaparras crocantes.', foto: peixe6, preco: 72.00, porcao: 'Serve 1 pessoa' },
    { id: 207, nome: 'Tacos de Peixe', descricao: 'Tacos artesanais recheados com peixe branco grelhado, repolho roxo e molho chipotle.', foto: peixe7, preco: 48.90, porcao: 'Serve 1 pessoa' },
    { id: 208, nome: 'Moqueca de Peixe', descricao: 'Tradicional moqueca baiana com peixe fresco, leite de coco, dendê e pimentões.', foto: peixe8, preco: 88.00, porcao: 'Serve 2 pessoas' },
    { id: 209, nome: 'Fish & Chips', descricao: 'Peixe empanado crocante servido com batatas fritas rústicas e molho de ervas.', foto: peixe9, preco: 52.00, porcao: 'Serve 1 pessoa' },
    { id: 210, nome: 'Ceviche de Peixe', descricao: 'Cubos de peixe branco marinados em limão com cebola roxa, coentro e pimenta.', foto: peixe10, preco: 62.00, porcao: 'Serve 1 pessoa' }
  ],

  // Nossas Porções
  3: [
    { id: 301, nome: 'Porção de Isca de Peixe', descricao: 'Iscas crocantes de peixe temperadas com especiarias, servidas com molho tártaro.', foto: porcao1, preco: 45.90, porcao: 'Serve 2 pessoas' },
    { id: 302, nome: 'Porção de Camarão Frito', descricao: 'Camarões grandes empanados e fritos até dourar, servidos com limão e molho cocktail.', foto: porcao2, preco: 65.00, porcao: 'Serve 2 pessoas' },
    { id: 303, nome: 'Porção de Lula à Dorê', descricao: 'Anéis de lula empanados dourados e crocantes, acompanhados de molho aioli caseiro.', foto: porcao3, preco: 55.00, porcao: 'Serve 2 pessoas' },
    { id: 304, nome: 'Bolinho de Bacalhau', descricao: 'Bolinhos artesanais de bacalhau desfiado com batata, temperos e ervas frescas.', foto: porcao4, preco: 42.00, porcao: '8 unidades' },
    { id: 305, nome: 'Casquinha de Siri', descricao: 'Casquinhas recheadas com siri desfiado, gratinadas com queijo e farofa crocante.', foto: porcao5, preco: 38.00, porcao: '4 unidades' }
  ],

  // Saladas Frescas
  4: [
    { id: 401, nome: 'Caesar Salad com Camarão', descricao: 'Clássica salada Caesar com alface romana, croutons, parmesão e camarões grelhados.', foto: salada1, preco: 48.90, porcao: 'Serve 1 pessoa' },
    { id: 402, nome: 'Salada Tropical', descricao: 'Mix de folhas verdes com manga, abacate, nozes e vinagrete de maracujá.', foto: salada2, preco: 38.00, porcao: 'Serve 1 pessoa' },
    { id: 403, nome: 'Salada Mediterrânea', descricao: 'Folhas frescas com tomate cereja, pepino, azeitonas, queijo feta e azeite extra virgem.', foto: salada3, preco: 42.00, porcao: 'Serve 1 pessoa' }
  ]
}
