import styled from 'styled-components'
import { Container } from '../../layouts/DefaultLayout/styles'

export const ProgrammingLanguagesContainer = styled(Container)`
  ul {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 8px;

    padding: 1rem;
    margin-top: 2rem;

    overflow: hidden;

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
