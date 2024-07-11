import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding: 2rem 0;

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
`