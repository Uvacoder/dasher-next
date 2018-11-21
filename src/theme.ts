import colors from 'open-color'
import toAlpha from './utils/toAlpha'

export interface Theme {
  fonts: {
    sans: string
    mono: string
  }
  fontWeights: {
    normal: number
    medium: number
    semibold: number
    bold: number
  }
  lineHeights: {
    none: number
    tight: number
    normal: number
    loose: number
  }
  colors: {
    white: string
    black: string
    red: Array<string>
    pink: Array<string>
    grape: Array<string>
    violet: Array<string>
    indigo: Array<string>
    blue: Array<string>
    cyan: Array<string>
    teal: Array<string>
    green: Array<string>
    lime: Array<string>
    yellow: Array<string>
    orange: Array<string>
    gray: Array<string>
    grayAlpha: Array<string>
  }
}

const theme: Theme = {
  fonts: {
    sans: fontStack([
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
    ]),
    mono: fontStack([
      'SFMono-Regular',
      'Consolas',
      'Liberation Mono',
      'Menlo',
      'Courier',
      'monospace',
    ]),
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    loose: 2,
  },
  colors: {
    ...colors,
    grayAlpha: colors.gray.map(color => toAlpha(color)),
  },
}

function fontStack(fonts: Array<string>) {
  return fonts
    .map(font => (font.indexOf(' ') !== -1 ? `"${font}"` : font))
    .join(', ')
}

export default theme
