import React from 'react'
import type { ReactElement } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { createPortal } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter, useLocation } from 'react-router-dom'
import { theme } from '../styles/theme'

const LocationDisplay = () => {
  const location = useLocation()
  return createPortal(
    <div data-testid="location-display">{location.pathname}</div>,
    document.body
  )
}

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        {children}
        <LocationDisplay />
      </MemoryRouter>
    </ThemeProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
