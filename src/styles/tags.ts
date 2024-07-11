import styled from 'styled-components'

export const Mark = styled.span`
  padding: 0.3rem 0.7rem;
  background-color: ${(props) => props.theme['green-100']};
  border-radius: 4px;

  h2 & {
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
  }
`
