import styled from 'styled-components'

export const HorizontalScroll = styled.div`
  @keyframes scrollInfinito {
    to {
      translate: calc(-43%);
    }
  }

  animation: scrollInfinito 12s linear infinite;

  display: flex;
  justify-content: space-around;
  gap: 1rem;
`
