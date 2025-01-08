import styled from 'styled-components'
import { Container } from '../../layouts/DefaultLayout/styles'

export const HomeContainer = styled(Container)`
  .hero {
    padding-bottom: 0;

    height: 90vh;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 7rem;

    main {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;

      h1 {
        font-size: 3rem;
      }
    }

    img {
      width: 20rem;
    }
  }
`

export const FooterContainer = styled.div`
  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
