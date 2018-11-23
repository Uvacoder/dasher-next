import React from 'react'
import useTheme from '../utils/useTheme'
import Badge from './Badge'
import Editable from './Editable'
import Flex from './Flex'

interface ColumnHeaderProps {
  name: string
  query: string
  issueCount: number
}

const ColumnHeader = ({ name, query, issueCount }: ColumnHeaderProps) => {
  const theme = useTheme()

  return (
    <Flex
      css={{
        padding: theme.spacing[4],
        flexDirection: 'column',
        alignItems: 'start',
        borderBottom: `1px solid ${theme.colors.grayAlpha[2]}`,
      }}
    >
      <Flex css={{ alignItems: 'center', margin: `0 0 ${theme.spacing[2]}` }}>
        <Editable
          as="h2"
          html={name}
          css={{
            margin: 0,
            fontSize: theme.fontSizes[4],
            fontWeight: theme.fontWeights.semibold,
            lineHeight: theme.lineHeights.tight,
          }}
        />
        <Badge>{issueCount}</Badge>
      </Flex>
      <Editable
        as="span"
        html={query}
        spellCheck={false}
        css={{
          alignSelf: 'stretch',
          fontFamily: theme.fonts.mono,
          color: theme.colors.grayAlpha[7],
        }}
      />
    </Flex>
  )
}

export default ColumnHeader
