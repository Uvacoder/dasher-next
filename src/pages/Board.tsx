import { Link, RouteComponentProps } from '@reach/router'
import React from 'react'
import Base from '../components/Base'
import Column from '../components/Column'
import Flex from '../components/Flex'
import useTheme from '../utils/useTheme'

interface BoardProps extends RouteComponentProps {
  boardId?: string
}

const data = {
  columns: [
    { name: 'Column 1', query: 'is:open' },
    { name: 'Column 2', query: 'is:open' },
    { name: 'Column 3', query: 'is:open' },
  ],
}

const Board = ({ boardId }: BoardProps) => {
  const theme = useTheme()

  const name = `Board ${boardId}`
  const query = 'org:feathericons'

  return (
    <Flex css={{ flexDirection: 'column', height: '100vh' }}>
      <Flex
        css={{
          alignItems: 'center',
          flexShrink: 0,
          height: '48px',
          padding: '0 16px',
          borderBottom: `1px solid ${theme.colors.grayAlpha[2]}`,
        }}
      >
        <Link to="/">Home</Link>
      </Flex>
      <Flex css={{ flexDirection: 'column', flexGrow: 1 }}>
        <Base css={{ padding: '48px' }}>
          <Base
            as="h1"
            css={{
              margin: '0 0 8px',
              fontSize: '36px',
              fontWeight: theme.fontWeights.bold,
              lineHeight: theme.lineHeights.tight,
            }}
          >
            {name}
          </Base>
          <Base
            as="span"
            css={{
              fontFamily: theme.fonts.mono,
              color: theme.colors.grayAlpha[7],
            }}
          >
            {query}
          </Base>
        </Base>
        <Flex
          css={{
            flexGrow: 1,
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <Flex css={{ flexGrow: 1, padding: '0 48px 48px' }}>
            {data.columns.map(column => (
              <Column column={column} css={{ marginRight: '16px' }} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Board
