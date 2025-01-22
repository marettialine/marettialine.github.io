import styled from 'styled-components'

import background from '../../assets/projects_background.png'

export const ProjectsContainer = styled.div`
  padding: 2rem 0;

  position: relative;

  background-color: ${(props) => props.theme['green-100']};

  background-image: url(${background});
  background-position: center;
  background-size: contain;

  border-radius: 17px;

  .container {
    z-index: 1;

    h2 {
      text-align: right;

      z-index: 1;

      .mark {
        background-color: ${(props) => props.theme['grey-850']};
      }
    }

    .projects {
      padding: 4rem 0;
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      flex-wrap: wrap;
      gap: 1rem;
      row-gap: 2rem;

      position: relative;

      .item {
        flex: 1;

        width: 100%;

        background-color: ${(props) => props.theme['gray-850']};

        padding: 1rem;

        border-radius: 8px;
        border: 1px solid ${(props) => props.theme['gray-900']};

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;

        transition: all 0.1s;

        .text {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: space-between;
          gap: 1rem;
        }

        &:nth-child(even) .text {
          order: 1;
        }

        &:nth-child(even) img {
          order: 2;
        }

        .desktop {
          width: 27rem;
        }

        .mobile {
          width: 15rem;
        }

        p {
          width: 90%;
          flex: 1;
        }

        .technologies {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;

          padding: 2rem 0;
        }

        a {
          text-decoration: none;
          color: ${(props) => props.theme.white};

          background-color: ${(props) => props.theme['green-100']};
          border: 1px solid ${(props) => props.theme['green-100']};
          padding: 0.5rem;
          border-radius: 8px;

          transition: all 0.1s;

          &:hover {
            background-color: transparent;
          }
        }

        &:hover {
          transform: scale(1.02);
          border: 1px solid ${(props) => props.theme.white};
        }

        @media screen and (max-width: 980px) {
          flex-direction: column;

          width: 70%;

          margin: 0 auto;

          padding: 2rem;

          &:nth-child(even) .text {
            order: 2;
          }

          &:nth-child(even) img {
            order: 1;
          }
        }

        @media screen and (max-width: 680px) {
          width: 100%;

          img,
          .desktop,
          .mobile {
            width: 100%;
            margin: 0 auto;
          }

          .technologies {
            flex-wrap: wrap;

            svg,
            img {
              width: 35px;
              height: 35px;
            }
          }
        }
      }
    }
  }
`
