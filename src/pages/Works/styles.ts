import styled from 'styled-components'

export const WorksContainer = styled.div`
  margin-top: 2rem;

  width: 100%;

  display: flex;
  align-items: stretch;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;

    width: 100%;

    &:first-child {
      border-right: 2px solid ${(props) => props.theme['green-100']};
      align-items: flex-end;
      text-align: right;

      li {
        padding-right: 2.5rem;

        .icon {
          right: -1.4rem;
        }
      }
    }
    &:last-child {
      border-left: 2px solid ${(props) => props.theme['green-100']};
      align-items: flex-start;

      li {
        padding-left: 2.5rem;

        .icon {
          left: -1.4rem;
        }
      }
    }

    li {
      display: flex;
      align-items: center;
      justify-content: center;

      position: relative;

      gap: 1rem;

      list-style: none;

      height: 4rem;

      p {
        span {
          display: block;

          &:first-child {
            text-transform: uppercase;
            font-weight: bold;
          }

          &:last-child {
            color: ${(props) => props.theme['gray-300']};
          }
        }
      }

      &.date {
        color: ${(props) => props.theme['gray-300']};
      }

      &:not(:last-child) {
        margin-bottom: 1rem;
      }

      .icon {
        background-color: ${(props) => props.theme['green-100']};
        color: ${(props) => props.theme.white};

        border-radius: 100%;

        position: absolute;

        width: 2.5rem;
        height: 2.5rem;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`
