import React from 'react'
import ContentEditable from 'react-contenteditable'
import { CSSObject } from 'styled-components'
import useTheme from '../utils/useTheme'
import Base from './Base'

// TODO: Expose `as` prop that maps to ContentEditable's `tagName` prop
// TODO: Open PR to update `tagName` type to support `React.ComponentType<any>`
// TODO: Open PR to update `onChange` and `onBlur` function signatures

interface EditableProps {
  html: string
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  css?: CSSObject
  disabled?: boolean
  onChange?: (event: React.SyntheticEvent<any>) => void
  onBlur?: (event: React.SyntheticEvent<any>) => void
}

const Editable = ({ as = 'div', css, ...props }: EditableProps) => {
  const theme = useTheme()

  return (
    <Base
      as={ContentEditable}
      css={{
        borderRadius: theme.radii[1],
        outline: 0,
        '&:hover': {
          backgroundColor: theme.colors.grayAlpha[2],
        },
        '&:focus': {
          backgroundColor: theme.colors.white,
          boxShadow: `0 0 0 2px ${theme.colors.primary[3]}`,
        },
        ...css,
      }}
      {...props}
    />
  )
}

export default Editable
