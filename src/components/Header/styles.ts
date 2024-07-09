import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: calc(100% - 4rem);

  position: fixed;
  top: 1rem;
  left: 2rem;

  padding: 1rem;

  background: ${(props) => props.theme['gray-850']};

  border-radius: 8px;

  img {
    width: 10rem;
  }

  span {
    font-family: 'Share Tech Mono', monospace;
    text-transform: uppercase;
    font-weight: bold;
    font-style: normal;
    font-size: 1rem;
  }

  nav {
    display: flex;
    gap: 1.5rem;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.3rem;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      text-decoration: none;
      text-transform: uppercase;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-100']};
      }

      /*&.active {
        color: ${(props) => props.theme['green-100']};
      }*/
    }
  }
`
