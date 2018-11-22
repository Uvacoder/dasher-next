// Source: https://www.styled-components.com/docs/api#define-a-theme-interface

import * as styledComponents from 'styled-components'
import { ThemedStyledComponentsModule } from 'styled-components'
import { Theme } from './theme'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeContext,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<Theme>

export { css, createGlobalStyle, keyframes, ThemeContext, ThemeProvider }
export default styled
