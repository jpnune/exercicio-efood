// ─── Funções de Máscara ───────────────────────────────────────────────────────

/** Remove todos os caracteres não numéricos */
export const onlyDigits = (value: string) => value.replace(/\D/g, '')

/** Máscara de CEP: 00000-000 */
export const maskCep = (value: string) => {
  const digits = onlyDigits(value).slice(0, 8)
  if (digits.length <= 5) return digits
  return `${digits.slice(0, 5)}-${digits.slice(5)}`
}

/** Máscara de Telefone: (00) 0000-0000 fixo ou (00) 00000-0000 celular */
export const maskPhone = (value: string) => {
  const digits = onlyDigits(value).slice(0, 11)
  if (digits.length === 0) return ''
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  // Com 11 dígitos → celular: (00) 00000-0000
  // Com 10 dígitos → fixo:    (00) 0000-0000
  const isCellphone = digits.length === 11
  const split = isCellphone ? 7 : 6
  if (digits.length <= split) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, split)}-${digits.slice(split)}`
}

/** Máscara de CPF: 000.000.000-00 */
export const maskCpf = (value: string) => {
  const digits = onlyDigits(value).slice(0, 11)
  if (digits.length <= 3) return digits
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`
  if (digits.length <= 9)
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`
}

/** Máscara de Número do Cartão: 0000 0000 0000 0000 */
export const maskCardNumber = (value: string) => {
  const digits = onlyDigits(value).slice(0, 16)
  return digits
    .replace(/(.{4})/g, '$1 ')
    .trimEnd()
}

/** Máscara de CVV: apenas 3 dígitos */
export const maskCvv = (value: string) => onlyDigits(value).slice(0, 3)

/** Máscara de Mês: 01-12 */
export const maskMonth = (value: string) => {
  const digits = onlyDigits(value).slice(0, 2)
  if (digits.length === 2) {
    const num = parseInt(digits, 10)
    if (num < 1) return '01'
    if (num > 12) return '12'
  }
  return digits
}

/** Máscara de Ano: 4 dígitos */
export const maskYear = (value: string) => onlyDigits(value).slice(0, 4)

/** Aceita apenas dígitos (campo numérico geral) */
export const maskNumeric = (value: string) => onlyDigits(value)

// ─── Validadores ──────────────────────────────────────────────────────────────

/** Valida CEP (deve ter 8 dígitos) */
export const validateCep = (value: string) =>
  onlyDigits(value).length === 8 || 'CEP inválido (deve ter 8 dígitos)'

/** Valida Telefone (deve ter 10 ou 11 dígitos) */
export const validatePhone = (value: string) => {
  const digits = onlyDigits(value).length
  return (digits === 10 || digits === 11) || 'Telefone inválido'
}

/** Valida CPF (deve ter 11 dígitos) */
export const validateCpf = (value: string) =>
  onlyDigits(value).length === 11 || 'CPF inválido (deve ter 11 dígitos)'

/** Valida Número do Cartão (deve ter 16 dígitos) */
export const validateCardNumber = (value: string) =>
  onlyDigits(value).length === 16 || 'Número do cartão inválido'

/** Valida CVV (deve ter 3 dígitos) */
export const validateCvv = (value: string) =>
  onlyDigits(value).length === 3 || 'CVV inválido (3 dígitos)'

/** Valida Mês (01–12) */
export const validateMonth = (value: string) => {
  const num = parseInt(value, 10)
  return (num >= 1 && num <= 12) || 'Mês inválido (01 a 12)'
}

/** Valida Ano (ano atual em diante, 4 dígitos) */
export const validateYear = (value: string) => {
  const currentYear = new Date().getFullYear()
  const num = parseInt(value, 10)
  return (
    (onlyDigits(value).length === 4 && num >= currentYear) ||
    `Ano inválido (mínimo ${currentYear})`
  )
}

/** Valida que o campo não está vazio após trim */
export const validateRequired = (label: string) => (value: string) =>
  value.trim().length > 0 || `${label} é obrigatório`
