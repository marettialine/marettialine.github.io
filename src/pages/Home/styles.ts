import styled from 'styled-components'
import { Container } from '../../layouts/DefaultLayout/styles'

import background from '../../assets/background.png'

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
  }
`

export const AboutMeContainer = styled.div`
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

        span {
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

export const TrainingContainer = styled.div`
  margin-top: -2rem;

  z-index: 0;
  position: relative;

  background-color: ${(props) => props.theme.black};
  padding: 6rem 0;

  h2 {
    text-align: center;
  }
`

export const ProjectsContainer = styled.div`
  padding: 4rem 0;

  position: relative;

  background-color: ${(props) => props.theme.black};

  .container {
    margin-top: -2rem;
    padding: 2rem 0;

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
      justify-content: space-evenly;
      flex-wrap: wrap;
      gap: 1rem;
      row-gap: 2rem;

      position: relative;

      .item {
        flex: 1;

        max-width: 32%;

        background-color: ${(props) => props.theme['gray-850']};
        padding: 1rem;
        border-radius: 8px;
        border: 1px solid ${(props) => props.theme['gray-900']};

        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        gap: 1rem;

        transition: all 0.1s;

        img {
          width: 100%;
          border-radius: 8px;
        }

        p {
          width: 90%;
          flex: 1;
        }

        .technologies {
          display: flex;
          align-items: center;
          justify-content: space-between;

          img {
            width: 5rem;
          }
        }

        a {
          text-decoration: none;
          color: ${(props) => props.theme.white};

          background-color: ${(props) => props.theme['green-100']};
          border: 1px solid ${(props) => props.theme['green-100']};
          padding: 0.5rem;
          border-radius: 8px;

          transition: all 0.1s;

          justify-self: flex-end;

          &:hover {
            background-color: transparent;
          }
        }

        &:hover {
          transform: scale(1.02);
          border: 1px solid ${(props) => props.theme.white};
        }
      }
    }
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;

    border-radius: 30px;
    width: 120%;
    height: 100%;

    left: -10%;

    z-index: 0;

    &:first-child {
      background-color: ${(props) => props.theme.white};

      transform: rotate(5deg);
    }

    &:nth-child(2) {
      background-color: ${(props) => props.theme['green-100']};

      transform: rotate(-5deg);

      background-image: url(${background});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
`

export const SkillsContainer = styled.div`
  padding: 6rem 0;

  h2 {
    text-align: left;
  }
`
