import styled from 'styled-components'

export const TechnologiesContainer = styled.div`
  padding: 4rem 0;

  h2 {
    text-align: left;
  }
`

export const ProgrammingLanguagesContainer = styled.div`
  ul {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 8px;

    padding: 1rem;
    margin-top: 2rem;

    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    li {
      flex: 1;

      list-style: none;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      padding-top: 0;

      img {
        height: 8rem;

        border-radius: 4px;
      }
    }
  }
`
