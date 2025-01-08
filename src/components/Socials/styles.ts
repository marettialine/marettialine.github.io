import styled from 'styled-components'

export const SocialsContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  &.vertical {
    padding: 0 1rem;
    flex-direction: column;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme['gray-850']};
    background-color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.white};
    border-radius: 100%;

    width: 45px;
    height: 45px;

    transition: all 0.1s;

    &:hover {
      color: ${(props) => props.theme.white};
      background-color: transparent;
      border: 1px solid ${(props) => props.theme['green-100']};
    }
  }

  &.footer {
    padding: 0 1rem;
    justify-content: flex-end;

    a {
      width: 35px;
      height: 35px;
    }
  }
`
