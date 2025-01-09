import styled from 'styled-components'

export const TechnologiesContainer = styled.div`
  padding: 4rem 0;

  h2 {
    text-align: left;
  }
`

export const ProgrammingLanguagesContainer = styled.div`
  .container {
    border-radius: 8px;

    padding: 1rem;
    margin-top: 2rem;

    overflow: hidden;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;

    white-space: nowrap;

    position: relative;

    &:before,
    &:after {
      position: absolute;

      top: 0;

      width: 7rem;
      height: 100%;

      content: '';

      background-color: red;

      z-index: 2;
    }

    &:before {
      left: 0;

      background: linear-gradient(
        to left,
        rgba(0, 0, 0, 0),
        ${(props) => props.theme['gray-850']}
      );
    }

    &:after {
      right: 0;

      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0),
        ${(props) => props.theme['gray-850']}
      );
    }

    &:hover ul {
      animation-play-state: paused;
    }

    li {
      background-color: rgba(0, 0, 0, 0.3);

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      padding: 1rem;

      border-radius: 8px;

      text-align: center;

      list-style: none;

      img {
        width: 8rem;
      }
    }
  }
`
