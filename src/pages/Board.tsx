import { Link, RouteComponentProps } from '@reach/router'
import React from 'react'
import Column from '../components/Column'
import ColumnList from '../components/ColumnList'
import Editable from '../components/Editable'
import Flex from '../components/Flex'
import useTheme from '../utils/useTheme'

interface BoardProps extends RouteComponentProps {
  boardId?: string
}

interface Board {
  name: string
  query: string
  columns: Column[]
}

const board: Board = {
  name: 'Board 1',
  query: 'org:primer',
  columns: [
    { name: 'Column 1', query: 'is:open' },
    { name: 'Column 2', query: 'is:open' },
    { name: 'Column 3', query: 'is:open' },
  ],
}

const Board = ({ boardId }: BoardProps) => {
  const theme = useTheme()

  return (
    <Flex css={{ flexDirection: 'column', height: '100vh' }}>
      <Flex
        css={{
          alignItems: 'center',
          flexShrink: 0,
          height: 48,
          padding: `0 ${theme.spacing[4]}`,
          borderBottom: `1px solid ${theme.colors.grayAlpha[2]}`,
        }}
      >
        <Link to="/">Home</Link>
      </Flex>
      <Flex css={{ flexDirection: 'column', flexGrow: 1 }}>
        <Flex
          css={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: theme.spacing[9],
          }}
        >
          <Editable
            // h1
            html={board.name}
            css={{
              margin: `0 0 ${theme.spacing[2]}`,
              fontSize: theme.fontSizes[7],
              fontWeight: theme.fontWeights.bold,
              lineHeight: theme.lineHeights.tight,
            }}
          />
          <Editable
            // span
            html={board.query}
            css={{
              fontFamily: theme.fonts.mono,
              color: theme.colors.grayAlpha[7],
            }}
          />
        </Flex>
        <Flex
          css={{
            flexGrow: 1,
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <ColumnList
            columns={board.columns}
            css={{
              flexGrow: 1,
              padding: `0 ${theme.spacing[9]} ${theme.spacing[9]}`,
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Board
