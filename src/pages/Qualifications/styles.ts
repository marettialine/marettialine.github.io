import styled from 'styled-components'

export const QualificationsContainer = styled.div`
  margin-top: -2rem;

  z-index: 0;
  position: relative;

  background-color: ${(props) => props.theme.black};
  padding: 4rem 0;
  padding-bottom: 2rem;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
  }

  .qualifications-btns {
    padding: 2rem 0;

    display: flex;
    justify-content: center;
    gap: 2rem;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      padding: 0.5rem;

      border-radius: 8px;
      border: 1px solid transparent;

      background-color: transparent;

      color: ${(props) => props.theme.white};

      &.active {
        border: 1px solid ${(props) => props.theme['green-100']};
      }
    }
  }
`
