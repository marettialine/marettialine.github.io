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

    @media screen and (max-width: 915px) {
      flex-direction: column;
    }

    @media screen and (max-width: 500px) {
      h1 {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      }
    }
  }
`

export const FooterContainer = styled.div`
  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 980px) {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
  }
`
