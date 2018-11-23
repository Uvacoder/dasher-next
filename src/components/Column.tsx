import React, { useState } from 'react'
import { CSSObject } from 'styled-components'
import useTheme from '../utils/useTheme'
import ColumnHeader from './ColumnHeader'
import Flex from './Flex'
import IssueList from './IssueList'

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
      <ColumnHeader name={name} query={query} issueCount={8} />
      <IssueList />
    </Flex>
  )
}

export default Column
