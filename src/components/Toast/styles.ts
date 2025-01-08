import styled from 'styled-components'

export const ToastContainer = styled.div`
  .toast-success {
    background-color: ${(props) =>
      props.theme['green-700']} !important; /* Nova cor verde */
    color: ${(props) => props.theme.white} !important; /* Texto branco */
  }

  .toast-error {
    background-color: ${(props) =>
      props.theme['red-500']} !important; /* Nova cor verde */
    color: ${(props) => props.theme.white} !important; /* Texto branco */
  }

  .toast-info {
    background-color: ${(props) =>
      props.theme['blue-500']} !important; /* Nova cor verde */
    color: ${(props) => props.theme.white} !important; /* Texto branco */
  }
`
