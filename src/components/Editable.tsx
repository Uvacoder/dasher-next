import React from 'react'
import { CSSObject } from 'styled-components'
import useTheme from '../utils/useTheme'
import Base from './Base'

interface EditableProps {
  html: string
  as?: keyof JSX.IntrinsicElements
  css?: CSSObject
  disabled?: boolean
  spellCheck?: boolean
}

const Editable = ({
  as = 'div',
  html,
  css,
  disabled = false,
  spellCheck = true,
}: EditableProps) => {
  const theme = useTheme()

  return (
    <Base
      as={as}
      contentEditable={!disabled}
      dangerouslySetInnerHTML={{ __html: html }}
      spellCheck={spellCheck}
      css={{
        borderRadius: theme.radii[1],
        outline: 0,
        '&:hover': {
          backgroundColor: theme.colors.grayAlpha[1],
        },
        '&:focus': {
          backgroundColor: theme.colors.white,
          boxShadow: `0 0 0 2px ${theme.colors.primary[3]}`,
        },
        ...css,
      }}
    />
  )
}

export default Editable
