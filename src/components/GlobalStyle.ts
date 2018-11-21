import { createGlobalStyle } from '../styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
    margin: 0;
    font-family: ${props => props.theme.fonts.sans};
    font-size: 16px;
    line-height: ${props => props.theme.lineHeights.normal};
    color: ${props => props.theme.colors.grayAlpha[9]};
    background-color: ${props => props.theme.colors.gray[1]};
  }
`

export default GlobalStyle
