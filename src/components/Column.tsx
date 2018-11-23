import React, { useState } from 'react'
import { CSSObject } from 'styled-components'
import useTheme from '../utils/useTheme'
import Badge from './Badge'
import Base from './Base'
import Code from './Code'
import Flex from './Flex'

interface ColumnProps {
  column: Column
  css?: CSSObject
}

interface Column {
  id: string
  index: number
  name: string
  query: string
}

const Column = ({ column, css }: ColumnProps) => {
  const theme = useTheme()
  const [name, setName] = useState(column.name)
  const [query, setQuery] = useState(column.query)

  return (
    <Flex
      css={{
        flexDirection: 'column',
        flexShrink: 0,
        width: '400px',
        backgroundColor: theme.colors.white,
        borderRadius: theme.radii[3],
        boxShadow: '0 1px 1px 1px rgba(0, 35, 70, 0.09)',
        ...css,
      }}
    >
      <Flex
        css={{
          padding: theme.spacing[4],
          flexDirection: 'column',
          alignItems: 'start',
          borderBottom: `1px solid ${theme.colors.grayAlpha[2]}`,
        }}
      >
        <Flex css={{ alignItems: 'center', margin: `0 0 ${theme.spacing[2]}` }}>
          <Base
            as="h2"
            css={{
              margin: 0,
              fontSize: theme.fontSizes[4],
              fontWeight: theme.fontWeights.semibold,
              lineHeight: theme.lineHeights.tight,
            }}
          >
            {name}
          </Base>
          <Badge>8</Badge>
        </Flex>
        <Code css={{ color: theme.colors.grayAlpha[7] }}>{query}</Code>
      </Flex>
    </Flex>
  )
}

export default Column
