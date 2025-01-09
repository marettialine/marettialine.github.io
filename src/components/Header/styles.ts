import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 74rem;

  position: -webkit-sticky;
  position: sticky;
  top: 1rem;
  margin: 2rem auto;
  padding: 0 2rem;

  z-index: 99999;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;

    width: calc(100% + 2rem);

    margin-left: -1rem;

    background: ${(props) => props.theme['gray-850']};

    border-radius: 8px;

    position: relative;

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

    nav,
    p {
      display: flex;
      gap: 1.5rem;
    }

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

      &:hover,
      &.active {
        border-bottom: 3px solid ${(props) => props.theme['green-100']};
      }

      /*&.active {
          color: ${(props) => props.theme['green-100']};
        }*/

      &.cv {
        color: ${(props) => props.theme['gray-100']};
        background-color: ${(props) => props.theme['green-100']};
        padding: 0.5rem 1rem;

        border: 1px solid ${(props) => props.theme['green-100']};
        border-radius: 8px;

        transition: all 0.1s;

        &:hover {
          background-color: transparent;
        }
      }
    }

    select {
      padding: 0 0.5rem;

      background-color: transparent;

      color: ${(props) => props.theme['gray-100']};

      border: 0;
      border-radius: 4px;

      option {
        background-color: ${(props) => props.theme['gray-850']};
      }
    }

    .mobile,
    .small-mobile {
      display: none;
    }

    @media screen and (max-width: 1050px) {
      .mobile {
        display: flex;
      }

      .small-mobile {
        display: flex;
      }

      .medium-mobile {
        display: none;
      }

      nav {
        display: none;
      }

      .menu-btn {
        background-color: transparent;

        color: ${(props) => props.theme['gray-100']};

        border: 0;
        border-radius: 8px;
      }

      .visible {
        width: 15rem;

        position: absolute;

        display: flex;
        flex-direction: column;
        gap: 0;

        top: 4rem;
        right: 0rem;

        background-color: ${(props) => props.theme['gray-850']};

        border: 1px solid ${(props) => props.theme['green-100']};
        border-radius: 8px;

        padding: 0.5rem 1rem;

        animation: fadeIn 0.3s ease-in forwards;

        a,
        select {
          padding: 1rem 0.5rem;
          width: 100%;

          text-align: center;
        }

        .cv {
          display: none;
        }
      }
    }

    @media screen and (max-width: 500px) {
      .mobile.cv {
        display: none;
      }

      .visible {
        .cv {
          display: flex;

          width: 100%;

          order: 2;

          margin-top: 1rem;
        }

        select {
          order: 1;
        }
      }
    }
  }
`
