import styled from 'styled-components'

export const AboutContainer = styled.div`
  padding: 0.5rem 0;

  background-color: ${(props) => props.theme.white};

  color: ${(props) => props.theme['gray-850']};

  border-radius: 17px;

  z-index: 1;
  position: relative;

  .about-info {
    margin-top: 3rem;

    display: flex;
    align-items: stretch;
    justify-content: space-around;
    gap: 5rem;

    .text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      p {
        line-height: 1.2;
      }

      .description {
        line-height: 1.5;

        .mark {
          color: ${(props) => props.theme.white};
        }
      }

      .numbers {
        display: flex;
        align-items: stretch;
        gap: 1.5rem;
        justify-content: space-between;

        p {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          background-color: ${(props) => props.theme['gray-850']};
          padding: 0.5rem;

          border-radius: 17px;
          border: 3px solid ${(props) => props.theme['gray-850']};

          text-align: center;

          font-size: 1.2rem;

          color: ${(props) => props.theme.white};

          transition: all 0.1s;

          span {
            font-size: 3rem;
            display: block;
            text-align: center;

            font-weight: bold;
          }

          &:hover {
            border: 3px solid ${(props) => props.theme['green-100']};

            transform: scale(1.1);
          }
        }
      }
    }

    img {
      width: 17rem;
    }
  }
`
