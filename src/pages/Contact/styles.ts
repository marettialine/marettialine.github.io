import styled from 'styled-components'

export const ContactContainer = styled.div`
  padding: 2rem 0;

  border-radius: 17px;

  background-color: ${(props) => props.theme.white};

  color: ${(props) => props.theme.black};

  h2 {
    text-align: center;

    margin-bottom: 2rem;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem 0;

    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 1rem;

      flex: 1;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
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

      img {
        width: 60%;
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
  }
`
