import styled from 'styled-components'

import background from '../../assets/projects_background.png'

export const ContactContainer = styled.div`
  padding: 2rem 0;

  border-radius: 17px;

  background-color: ${(props) => props.theme.white};

  background-image: url(${background});
  background-position: center;
  background-size: contain;

  color: ${(props) => props.theme.black};

  h2 {
    text-align: center;

    margin-bottom: 2rem;
  }

  .container {
    display: flex;
    justify-content: space-between;
    gap: 7rem;

    padding: 1rem 0;

    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      gap: 1rem;

      flex: 1;

      .links {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;

          color: ${(props) => props.theme.black};

          text-decoration: none;

          transition: all 0.3s;

          &:hover {
            color: ${(props) => props.theme['green-100']};

            font-size: 1.1rem;
          }
        }

        .icon {
          background-color: ${(props) => props.theme['green-100']};

          width: 50px;
          height: 50px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: ${(props) => props.theme.white};

          border-radius: 17px;
        }
      }

      img {
        width: 80%;
        margin: 0 auto;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      background-color: ${(props) => props.theme['green-100']};

      width: 40%;

      padding: 2rem 1rem;

      border-radius: 8px;

      h3 {
        text-align: center;

        color: ${(props) => props.theme.white};
      }

      input,
      textarea {
        width: 100%;

        background-color: ${(props) => props.theme['green-50']};

        border-radius: 4px;
        border: 1px solid transparent;

        padding: 0.5rem;

        resize: vertical;
      }

      textarea {
        height: 5rem;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        border-radius: 4px;
        border: 0;

        padding: 0.5rem 0;

        background-color: ${(props) => props.theme['green-700']};

        color: ${(props) => props.theme.white};
      }
    }

    @media screen and (max-width: 980px) {
      flex-direction: column;
      align-items: center;
      gap: 4rem;

      .text {
        order: 2;

        .links {
          justify-content: space-evenly;
        }
      }

      form {
        order: 1;

        width: 100%;
      }
    }

    @media screen and (max-width: 470px) {
      .text {
        .links {
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 1.5rem;

          margin-bottom: 2rem;

          a:last-child {
            align-self: flex-end;
            p {
              order: 2;
            }
            span {
              order: 1;
            }
          }
        }
      }
    }
  }
`
