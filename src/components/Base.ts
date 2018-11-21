import styled, { CSSObject } from 'styled-components'

interface BaseProps {
  css?: CSSObject
}

const Base = styled.div<BaseProps>`
  ${props => props.css}
`

export default Base
