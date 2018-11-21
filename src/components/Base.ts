import { CSSObject } from 'styled-components'
import styled from '../styled-components'

interface BaseProps {
  css?: CSSObject
}

const Base = styled.div<BaseProps>`
  ${props => props.css}
`

export default Base
