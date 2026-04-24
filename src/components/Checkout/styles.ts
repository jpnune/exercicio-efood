import styled from 'styled-components'
import { colors } from '../../styles'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${colors.white};
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
`

export const FieldGroup = styled.div<{ $width?: string }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: ${props => props.$width ? '0 0 auto' : '1'};
  width: ${props => props.$width || '100%'};

  label {
    font-size: 14px;
    font-weight: 700;
  }

  input {
    padding: 8px;
    border: none;
    font-size: 14px;
    background-color: ${colors.white};
    color: ${colors.textDark};
    width: 100%;

    &:focus {
      outline: 2px solid ${colors.beige};
    }
  }
`

export const Row = styled.div`
  display: flex;
  gap: 8px;
`

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: ${colors.beige};
  font-weight: 700;
`

export const SubmitButton = styled.button`
  background-color: ${colors.beige};
  color: ${colors.primary};
  border: none;
  padding: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const SecondaryButton = styled.button`
  background: none;
  border: none;
  color: ${colors.white};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  width: 100%;
  margin-top: 8px;

  &:hover {
    opacity: 0.7;
  }
`

export const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: ${colors.white};
`

export const ConfirmText = styled.p`
  font-size: 14px;
  line-height: 1.6;
`

export const ApiErrorMessage = styled.div`
  background-color: rgba(255, 80, 80, 0.15);
  border: 1px solid rgba(255, 80, 80, 0.5);
  border-radius: 4px;
  color: #ffb3b3;
  font-size: 13px;
  font-weight: 700;
  padding: 10px 12px;
  margin-bottom: 8px;
  line-height: 1.4;
`
