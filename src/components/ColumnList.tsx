import React from 'react'
import { CSSObject } from 'styled-components'
import useTheme from '../utils/useTheme'
import Column from './Column'
import Flex from './Flex'

interface ColumnListProps {
  columns: Column[]
  css?: CSSObject
}

const ColumnList = ({ columns, css }: ColumnListProps) => {
  const theme = useTheme()
  return (
    <Flex css={{ alignItems: 'flex-start', ...css }}>
      {columns.map(column => (
        <Column
          key={column.id}
          column={column}
          css={{ marginRight: theme.spacing[4] }}
        />
      ))}
    </Flex>
  )
}

export default ColumnList
