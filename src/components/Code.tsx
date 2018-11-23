import React from 'react'
import { CSSObject } from 'styled-components'
import useTheme from '../utils/useTheme'
import Base from './Base'

interface CodeProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  css?: CSSObject
  children?: React.ReactNode
}

const Code = ({ as = 'code', css, children }: CodeProps) => {
  const theme = useTheme()

  return (
    <Base
      as={as}
      css={{
        fontFamily: theme.fonts.mono,
        fontSize: 'inherit',
        ...css,
      }}
      children={children}
    />
  )
}

export default Code
