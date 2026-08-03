# 🍔 eFood — Plataforma de Delivery de Comida

> Aplicação web de delivery de restaurantes desenvolvida com React, TypeScript e Redux Toolkit, consumindo uma API REST pública. O projeto simula o fluxo completo de pedido: listagem de restaurantes, cardápio, carrinho de compras e checkout com formulário de entrega e pagamento.

[![Deploy na Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://exercicio-efood-chi.vercel.app)
[![TypeScript](https://img.shields.io/badge/TypeScript-98.7%25-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Build%20Tool-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.3.0-764ABC?style=flat-square&logo=redux)](https://redux-toolkit.js.org/)

🔗 **[Acesse o projeto em produção]((https://exercicio-efood-78n3hvvct-joao-paulo-s-projects-68291a6f.vercel.app/))**

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Como Executar Localmente](#-como-executar-localmente)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Testes](#-testes)
- [Deploy](#-deploy)

---

## 🎯 Sobre o Projeto

O **eFood** é um exercício prático de desenvolvimento frontend desenvolvido durante o curso de programação. O objetivo foi construir uma aplicação completa de delivery de alimentos, replicando a experiência de plataformas como iFood e Rappi.

A aplicação consome uma **API REST pública** para buscar os dados de restaurantes e cardápios, e gerencia o estado global do carrinho de compras com **Redux Toolkit**.

---

## ✨ Funcionalidades

- **🏠 Página Inicial** — Listagem de restaurantes com cards informativos (nome, categoria, avaliação e imagem)
- **🍽️ Perfil do Restaurante** — Exibição do cardápio completo com pratos disponíveis
- **🔍 Modal do Prato** — Visualização detalhada de cada prato com descrição, foto e preço
- **🛒 Carrinho de Compras** — Sidebar lateral com itens adicionados, controle de quantidade e total
- **📝 Checkout** — Formulário validado de entrega (endereço) e pagamento (cartão de crédito)
- **🏷️ Tags de Categoria** — Identificação visual das categorias dos restaurantes
- **📱 Layout Responsivo** — Interface adaptada para diferentes tamanhos de tela

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Versão | Finalidade |
|---|---|---|
| **React** | 18.3.1 | Biblioteca principal de UI |
| **TypeScript** | — | Tipagem estática e segurança de tipos |
| **Vite** | — | Bundler e servidor de desenvolvimento |
| **Redux Toolkit** | 2.3.0 | Gerenciamento de estado global (carrinho) |
| **React Router DOM** | — | Roteamento entre páginas (Home / Perfil) |
| **React Hook Form** | 7.73.1 | Gerenciamento e validação de formulários |
| **Styled Components** | — | Estilização CSS-in-JS dos componentes |
| **Jest** | — | Framework de testes unitários |

---

## 📁 Estrutura de Pastas

```
exercicio-efood/
├── __mocks__/              # Mocks para testes (ex: SVG imports)
├── src/
│   ├── assets/
│   │   └── images/         # Imagens estáticas do projeto
│   ├── components/
│   │   ├── Cart/           # Componente do carrinho (sidebar)
│   │   ├── Checkout/       # Formulário de checkout
│   │   ├── DishCard/       # Card de prato no cardápio
│   │   ├── DishModal/      # Modal de detalhes do prato
│   │   ├── Footer/         # Rodapé da aplicação
│   │   ├── Header/         # Cabeçalho da aplicação
│   │   ├── RestaurantCard/ # Card de restaurante na listagem
│   │   └── Tag/            # Componente de tag/categoria
│   ├── pages/
│   │   ├── Home/           # Página inicial com lista de restaurantes
│   │   └── RestaurantProfile/ # Página de perfil/cardápio do restaurante
│   ├── services/           # Configuração e chamadas à API (RTK Query)
│   ├── store/              # Configuração do Redux Store
│   ├── types/              # Interfaces e tipos TypeScript
│   ├── utils/              # Funções utilitárias
│   ├── App.tsx             # Componente raiz com roteamento
│   ├── main.tsx            # Ponto de entrada da aplicação
│   └── styles.ts           # Estilos globais
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vercel.json
```

---

## ⚙️ Como Executar Localmente

### Pré-requisitos

- **Node.js** versão 18 ou superior
- **npm** ou **yarn**

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/jpnune/exercicio-efood.git

# 2. Acesse a pasta do projeto
cd exercicio-efood

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em: `http://localhost:5173`

---

## 📜 Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com hot reload |
| `npm run build` | Gera o build de produção otimizado |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run lint` | Executa o ESLint para verificar qualidade do código |
| `npm test` | Executa os testes unitários uma vez |
| `npm run test:watch` | Executa os testes em modo watch (reexecuta ao salvar) |
| `npm run test:coverage` | Executa os testes e gera relatório de cobertura |

---

## 🧪 Testes

O projeto possui testes unitários configurados com **Jest**. Os mocks estão localizados na pasta `__mocks__/` na raiz do projeto.

```bash
# Executar todos os testes
npm test

# Verificar cobertura de código
npm run test:coverage
```

---

## 🌐 Deploy

O projeto está hospedado na **Vercel** com deploy automático a partir da branch `main`.

🔗 **URL de Produção:** [exercicio-efood](https://exercicio-efood-62skr4ty5-joao-paulo-s-projects-68291a6f.vercel.app/)

A configuração do deploy está definida no arquivo `vercel.json` na raiz do projeto.

---

## 👨‍💻 Autor

Desenvolvido por **João Paulo Nunes** como exercício prático de desenvolvimento frontend.

- GitHub: [@jpnune](https://github.com/jpnune)
- Repositório: [exercicio-efood](https://github.com/jpnune/exercicio-efood)




