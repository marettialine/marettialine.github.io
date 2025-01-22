import styled from 'styled-components'

export const IconContainer = styled.div`
  border: 1px solid ${(props) => props.theme.white};
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  svg {
    background-color: transparent;
  }

  &.react {
    -webkit-box-shadow: 0px 0px 20px 5px rgba(0, 219, 252, 0.73);
    -moz-box-shadow: 0px 0px 20px 5px rgba(0, 219, 252, 0.73);
    box-shadow: 0px 0px 20px 5px rgba(0, 219, 252, 0.73);
  }

  &.typescript {
    -webkit-box-shadow: 0px 0px 20px 5px rgba(0, 123, 205, 0.73);
    -moz-box-shadow: 0px 0px 20px 5px rgba(0, 123, 205, 0.73);
    box-shadow: 0px 0px 20px 5px rgba(0, 123, 205, 0.73);
  }

  &.node {
    -webkit-box-shadow: 0px 0px 20px 5px rgba(104, 159, 99, 0.73);
    -moz-box-shadow: 0px 0px 20px 5px rgba(104, 159, 99, 0.73);
    box-shadow: 0px 0px 20px 5px rgba(104, 159, 99, 0.73);
  }

  &.styled-components {
    -webkit-box-shadow: 0px 0px 20px 5px rgba(219, 127, 183, 0.73);
    -moz-box-shadow: 0px 0px 20px 5px rgba(219, 127, 183, 0.73);
    box-shadow: 0px 0px 20px 5px rgba(219, 127, 183, 0.73);
  }

  &.html {
    -webkit-box-shadow: 0px 0px 20px 5px rgba(255, 101, 30, 0.73);
    -moz-box-shadow: 0px 0px 20px 5px rgba(255, 101, 30, 0.73);
    box-shadow: 0px 0px 20px 5px rgba(255, 101, 30, 0.73);
  }

  &.javascript {
    -webkit-box-shadow: 0px 0px 20px 5px rgba(243, 192, 33, 0.73);
    -moz-box-shadow: 0px 0px 20px 5px rgba(243, 192, 33, 0.73);
    box-shadow: 0px 0px 20px 5px rgba(243, 192, 33, 0.73);
  }

  &.php {
    -webkit-box-shadow: 0px 0px 20px 5px rgba(119, 123, 179, 0.73);
    -moz-box-shadow: 0px 0px 20px 5px rgba(119, 123, 179, 0.73);
    box-shadow: 0px 0px 20px 5px rgba(119, 123, 179, 0.73);
  }

  &.power-apps {
    -webkit-box-shadow: 0px 0px 20px 5px rgba(135, 42, 127, 0.73);
    -moz-box-shadow: 0px 0px 20px 5px rgba(135, 42, 127, 0.73);
    box-shadow: 0px 0px 20px 5px rgba(135, 42, 127, 0.73);
  }

  &.icon {
    img {
      width: 35px;
      height: 35px;
    }
  }
`
