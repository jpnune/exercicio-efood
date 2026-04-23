import {
  maskCep,
  maskPhone,
  maskCpf,
  maskCardNumber,
  maskCvv,
  maskMonth,
  maskYear,
  maskNumeric,
  validateCep,
  validatePhone,
  validateCpf,
  validateCardNumber,
  validateCvv,
  validateMonth,
  validateYear,
} from './masks'

// ─── maskCep ──────────────────────────────────────────────────────────────────
describe('maskCep', () => {
  it('deve formatar CEP com 8 dígitos', () => {
    expect(maskCep('01310100')).toBe('01310-100')
  })
  it('deve aceitar entrada parcial', () => {
    expect(maskCep('0131')).toBe('0131')
  })
  it('deve ignorar caracteres não numéricos', () => {
    expect(maskCep('01310-100abc')).toBe('01310-100')
  })
  it('deve limitar a 8 dígitos', () => {
    expect(maskCep('0131010099999')).toBe('01310-100')
  })
})

// ─── maskPhone ────────────────────────────────────────────────────────────────
describe('maskPhone', () => {
  it('deve formatar telefone celular com 11 dígitos', () => {
    expect(maskPhone('11999998888')).toBe('(11) 99999-8888')
  })
  it('deve formatar telefone fixo com 10 dígitos', () => {
    expect(maskPhone('1133334444')).toBe('(11) 3333-4444')
  })
  it('deve aceitar entrada parcial (apenas DDD)', () => {
    expect(maskPhone('11')).toBe('(11')
  })
  it('deve ignorar caracteres não numéricos', () => {
    expect(maskPhone('(11) 9-9999-8888')).toBe('(11) 99999-8888')
  })
})

// ─── maskCpf ──────────────────────────────────────────────────────────────────
describe('maskCpf', () => {
  it('deve formatar CPF com 11 dígitos', () => {
    expect(maskCpf('12345678901')).toBe('123.456.789-01')
  })
  it('deve aceitar entrada parcial', () => {
    expect(maskCpf('123456')).toBe('123.456')
  })
  it('deve limitar a 11 dígitos', () => {
    expect(maskCpf('123456789012345')).toBe('123.456.789-01')
  })
  it('deve ignorar caracteres não numéricos', () => {
    expect(maskCpf('123.456.789-01')).toBe('123.456.789-01')
  })
})

// ─── maskCardNumber ───────────────────────────────────────────────────────────
describe('maskCardNumber', () => {
  it('deve formatar número do cartão com espaços a cada 4 dígitos', () => {
    expect(maskCardNumber('1234567890123456')).toBe('1234 5678 9012 3456')
  })
  it('deve aceitar entrada parcial', () => {
    expect(maskCardNumber('12345')).toBe('1234 5')
  })
  it('deve limitar a 16 dígitos', () => {
    expect(maskCardNumber('12345678901234567890')).toBe('1234 5678 9012 3456')
  })
})

// ─── maskCvv ──────────────────────────────────────────────────────────────────
describe('maskCvv', () => {
  it('deve aceitar 3 dígitos', () => {
    expect(maskCvv('123')).toBe('123')
  })
  it('deve limitar a 3 dígitos', () => {
    expect(maskCvv('12345')).toBe('123')
  })
  it('deve remover caracteres não numéricos', () => {
    expect(maskCvv('1a2')).toBe('12')
  })
})

// ─── maskMonth ────────────────────────────────────────────────────────────────
describe('maskMonth', () => {
  it('deve aceitar mês válido', () => {
    expect(maskMonth('12')).toBe('12')
  })
  it('deve retornar 01 para mês menor que 1', () => {
    expect(maskMonth('00')).toBe('01')
  })
  it('deve retornar 12 para mês maior que 12', () => {
    expect(maskMonth('15')).toBe('12')
  })
})

// ─── maskYear ─────────────────────────────────────────────────────────────────
describe('maskYear', () => {
  it('deve limitar a 4 dígitos', () => {
    expect(maskYear('20261234')).toBe('2026')
  })
  it('deve aceitar entrada parcial', () => {
    expect(maskYear('20')).toBe('20')
  })
})

// ─── maskNumeric ──────────────────────────────────────────────────────────────
describe('maskNumeric', () => {
  it('deve remover todos os caracteres não numéricos', () => {
    expect(maskNumeric('abc123def456')).toBe('123456')
  })
  it('deve retornar string vazia se não houver dígitos', () => {
    expect(maskNumeric('abc')).toBe('')
  })
})

// ─── Validadores ──────────────────────────────────────────────────────────────
describe('validateCep', () => {
  it('deve retornar true para CEP válido', () => {
    expect(validateCep('01310-100')).toBe(true)
  })
  it('deve retornar mensagem de erro para CEP inválido', () => {
    expect(validateCep('0131')).toContain('inválido')
  })
})

describe('validatePhone', () => {
  it('deve retornar true para celular (11 dígitos)', () => {
    expect(validatePhone('(11) 99999-8888')).toBe(true)
  })
  it('deve retornar true para fixo (10 dígitos)', () => {
    expect(validatePhone('(11) 3333-4444')).toBe(true)
  })
  it('deve retornar mensagem de erro para telefone inválido', () => {
    expect(validatePhone('1199')).toContain('inválido')
  })
})

describe('validateCpf', () => {
  it('deve retornar true para CPF com 11 dígitos', () => {
    expect(validateCpf('123.456.789-01')).toBe(true)
  })
  it('deve retornar mensagem de erro para CPF curto', () => {
    expect(validateCpf('123.456')).toContain('inválido')
  })
})

describe('validateCardNumber', () => {
  it('deve retornar true para cartão com 16 dígitos', () => {
    expect(validateCardNumber('1234 5678 9012 3456')).toBe(true)
  })
  it('deve retornar mensagem de erro para número inválido', () => {
    expect(validateCardNumber('1234')).toContain('inválido')
  })
})

describe('validateCvv', () => {
  it('deve retornar true para CVV com 3 dígitos', () => {
    expect(validateCvv('123')).toBe(true)
  })
  it('deve retornar mensagem de erro para CVV inválido', () => {
    expect(validateCvv('12')).toContain('inválido')
  })
})

describe('validateMonth', () => {
  it('deve retornar true para mês entre 01 e 12', () => {
    expect(validateMonth('06')).toBe(true)
  })
  it('deve retornar mensagem de erro para mês 0', () => {
    expect(validateMonth('0')).toContain('inválido')
  })
  it('deve retornar mensagem de erro para mês 13', () => {
    expect(validateMonth('13')).toContain('inválido')
  })
})

describe('validateYear', () => {
  const currentYear = new Date().getFullYear()
  it('deve retornar true para ano atual ou futuro', () => {
    expect(validateYear(String(currentYear))).toBe(true)
  })
  it('deve retornar mensagem de erro para ano passado', () => {
    expect(validateYear(String(currentYear - 1))).toContain('inválido')
  })
})
