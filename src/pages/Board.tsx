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
  id: string
  name: string
  query: string
  columns: Column[]
}

const board: Board = {
  id: 'board-1',
  name: 'Board 1',
  query: 'org:github is:open is:pr',
  columns: [
    {
      id: 'ready',
      index: 0,
      name: 'Ready',
      query: 'review:approved status:success',
    },
    {
      id: 'needs-review',
      index: 1,
      name: 'Needs review',
      query: 'review:none status:success',
    },
    {
      id: 'changes-requested',
      index: 2,
      name: 'Changes requested',
      query: 'review:changes_requested',
    },
    {
      id: 'failing-checks',
      index: 2,
      name: 'Failing checks',
      query: '-status:success',
    },
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
            as="h1"
            html={board.name}
            css={{
              margin: `0 0 ${theme.spacing[2]}`,
              fontSize: theme.fontSizes[7],
              fontWeight: theme.fontWeights.bold,
              lineHeight: theme.lineHeights.tight,
            }}
          />
          <Editable
            as="span"
            html={board.query}
            spellCheck={false}
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
