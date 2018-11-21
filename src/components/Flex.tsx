import React from 'react'
import { CSSObject } from 'styled-components'
import Base from './Base'

interface FlexProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  css?: CSSObject
  children?: React.ReactNode
}

const Flex = ({ as = 'div', css, children }: FlexProps) => {
  return <Base as={as} css={{ display: 'flex', ...css }} children={children} />
}

export default Flex
