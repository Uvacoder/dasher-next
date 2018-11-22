import colors from 'open-color'
import toAlpha from './utils/toAlpha'

export interface Theme {
  spacing: Array<string>
  fonts: {
    sans: string
    mono: string
  }
  fontSizes: Array<string>
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
    primary: Array<string>
    red: Array<string>
    green: Array<string>
    violet: Array<string>
    gray: Array<string>
    grayAlpha: Array<string>
    white: string
    black: string
  }
  radii: Array<string>
}

const theme: Theme = {
  spacing: [
    '0',
    '0.25rem',
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '3rem',
    '4rem',
    '5rem',
    '6rem',
    '8rem',
  ],
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
  fontSizes: [
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.125rem',
    '1.25rem',
    '1.5rem',
    '1.875rem',
    '2.25rem',
    '3rem',
  ],
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
    primary: colors.blue,
    red: colors.red,
    green: colors.green,
    violet: colors.violet,
    gray: colors.gray,
    grayAlpha: colors.gray.map(color => toAlpha(color)),
    white: colors.white,
    black: colors.black,
  },
  radii: ['0', '2px', '4px', '6px'],
}

function fontStack(fonts: Array<string>) {
  return fonts
    .map(font => (font.indexOf(' ') !== -1 ? `"${font}"` : font))
    .join(', ')
}

export default theme
