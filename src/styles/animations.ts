import styled from 'styled-components'

export const HorizontalScroll = styled.ul`
  @keyframes scroll {
    from {
      translate: calc(5%);
    }
    to {
      translate: calc(-100%);
    }
  }

  animation: scroll 15s linear infinite;

  display: flex;
  justify-content: space-between;
  gap: 1rem;

  padding: 1rem 0;

  position: relative;

  z-index: 1;
`
