import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util'

// Ajuste de tipagem para silenciar avisos do editor
// Usamos casting para any para garantir a injeção global necessária para os testes
const globalAny: any = global

globalAny.TextEncoder = TextEncoder
globalAny.TextDecoder = TextDecoder
