import React from 'react'
import { CSSObject } from 'styled-components'
import useTheme from '../utils/useTheme'
import Base from './Base'

interface BadgeProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  css?: CSSObject
  children?: React.ReactNode
}

const Badge = ({ as = 'span', css, children }: BadgeProps) => {
  const theme = useTheme()

  return (
    <Base
      as={as}
      css={{
        display: 'inline-block',
        marginLeft: theme.spacing[2],
        padding: `${theme.spacing[1]} ${theme.spacing[2]}`,
        fontSize: theme.fontSizes[1],
        fontWeight: theme.fontWeights.medium,
        lineHeight: theme.lineHeights.none,
        color: theme.colors.grayAlpha[7],
        backgroundColor: theme.colors.grayAlpha[2],
        borderRadius: 999, // Arbitrarily large borderRadius to create pill shape
        ...css,
      }}
      children={children}
    />
  )
}

export default Badge
