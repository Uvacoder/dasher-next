import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
    margin: 0;
    font-family: system-ui, sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    color: #343a40;
    background-color: #f1f3f5;
  }
`

export default GlobalStyle
