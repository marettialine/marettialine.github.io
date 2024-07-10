import styled from 'styled-components'

export const HorizontalScroll = styled.div`
  @keyframes scrollInfinito {
    to {
      translate: calc(-30%);
    }
  }

  animation: scrollInfinito 10s linear infinite;

  display: flex;
  justify-content: space-around;
  gap: 1rem;
`
