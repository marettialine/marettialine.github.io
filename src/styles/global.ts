import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']}
    }

    body{
        background: ${(props) => props.theme['gray-850']};
        color: ${(props) => props.theme.white};
        -webkit-font-smoothing: antialiased;

        overflow-x: hidden;
    }

    body, input, textarea, button{
        font-family: "Share Tech", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 1rem;
    }

    *::-webkit-scrollbar {
        width: 7px;
        height: 7px; 
    }

    *::-webkit-scrollbar-track {
        background: ${(props) => props.theme['gray-600']};
        padding: 2px;
    }

    *::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme['green-100']};
    }

    img{
        user-drag: none;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    button{
        cursor: pointer;

        transition: all 0.1s;
    }

    button:disabled {
      cursor: not-allowed;
    }

    @media (max-width: 768px) {
        /* Se 16px = 1rem = 100%, 14px = ? */
        html {
            font-size: 87.5%;
        }
    }
`
