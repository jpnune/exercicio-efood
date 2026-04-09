import styled from 'styled-components'

export const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`

export const Sidebar = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
  z-index: 101;
  transform: ${(props) => (props.$isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  box-shadow: ${(props) => (props.$isOpen ? '-4px 0 20px rgba(0, 0, 0, 0.3)' : 'none')};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
  }
`

export const SidebarContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 8px 8px 0;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }
`

export const CartItem = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  gap: 8px;
  position: relative;
  border-radius: 4px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
  }
`

export const CartItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    font-size: 14px;
    font-weight: 900;
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 2px;
  }

  .price {
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.text};
  }
`

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
`

export const QuantityButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s, transform 0.1s;
  line-height: 1;
  padding: 0;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }

  &:active {
    transform: scale(0.9);
  }
`

export const QuantityValue = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  min-width: 20px;
  text-align: center;
`

export const RemoveButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.15);
  }

  svg {
    width: 16px;
    height: 16px;
    fill: ${(props) => props.theme.colors.primary};
  }
`

export const SidebarFooter = styled.div`
  padding: 8px;
`

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  color: ${(props) => props.theme.colors.white};

  span {
    font-size: 14px;
    font-weight: 700;
  }
`

export const CheckoutButton = styled.button`
  display: block;
  width: 100%;
  padding: 4px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  text-align: center;
  border-radius: 4px;
  transition: background-color 0.2s, transform 0.15s;

  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: ${(props) => props.theme.colors.background};
  text-align: center;

  p {
    font-size: 16px;
    margin-top: 16px;
    line-height: 1.5;
  }
`

/* ==============================
   Checkout Steps Styles
   ============================== */

export const FormContainer = styled.div`
  padding: 16px 8px;
  flex: 1;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }
`

export const FormTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.background};
  margin-bottom: 16px;
`

export const FormGroup = styled.div`
  margin-bottom: 8px;
`

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.background};
  margin-bottom: 4px;
`

export const Input = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  padding: 8px;
  border: 2px solid ${(props) => (props.$hasError ? '#ff6b6b' : 'transparent')};
  border-radius: 4px;
  font-size: 14px;
  background-color: ${(props) => props.$hasError ? '#fff0f0' : props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  outline: none;
  transition: box-shadow 0.2s, border-color 0.2s, background-color 0.2s;

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.$hasError ? '#ff6b6b' : props.theme.colors.secondary};
  }

  &::placeholder {
    color: rgba(3, 4, 94, 0.4);
  }
`

export const ErrorMessage = styled.span`
  display: block;
  font-size: 12px;
  color: #ffc9c9;
  margin-top: 2px;
  font-weight: 500;
`

export const InputRow = styled.div`
  display: flex;
  gap: 8px;

  ${FormGroup} {
    flex: 1;
  }
`

export const FormFooter = styled.div`
  padding: 8px;
`

export const FormButton = styled.button`
  display: block;
  width: 100%;
  padding: 4px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  text-align: center;
  border-radius: 4px;
  margin-bottom: 8px;
  transition: background-color 0.2s, transform 0.15s;

  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`

export const BackButton = styled.button`
  display: block;
  width: 100%;
  padding: 4px;
  background-color: transparent;
  color: ${(props) => props.theme.colors.background};
  font-size: 14px;
  font-weight: 700;
  border: 1px solid ${(props) => props.theme.colors.background};
  cursor: pointer;
  text-align: center;
  border-radius: 4px;
  transition: background-color 0.2s, transform 0.15s;

  &:hover {
    background-color: rgba(202, 240, 248, 0.15);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`

/* ==============================
   Confirmation Step
   ============================== */

export const ConfirmationContainer = styled.div`
  padding: 16px 8px;
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const ConfirmationTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.background};
  margin-bottom: 16px;
`

export const ConfirmationText = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${(props) => props.theme.colors.background};
  margin-bottom: 16px;
`
