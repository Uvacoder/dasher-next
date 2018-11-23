import React from 'react'
import { CSSObject } from 'styled-components'
import Base from './Base'

interface LinkProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  css?: CSSObject
  children?: React.ReactNode
}

const Link = ({ as = 'a', css, children }: LinkProps) => {
  return (
    <Base
      as={as}
      css={{
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
        ...css,
      }}
      children={children}
    />
  )
}

export default Link
