import React from 'react'
import useTheme from '../utils/useTheme'
import Flex from './Flex'
import Link from './Link'

interface IssueProps {
  issue: Issue
}

interface Issue {
  title: string
}

const Issue = ({ issue }: IssueProps) => {
  const theme = useTheme()
  return (
    <Flex css={{ flexDirection: 'column', padding: theme.spacing[4] }}>
      <Link
        css={{
          fontWeight: theme.fontWeights.medium,
          lineHeight: theme.lineHeights.tight,
        }}
      >
        {issue.title}
      </Link>
    </Flex>
  )
}

export default Issue
