import Octicon, { GitPullRequest } from '@githubprimer/octicons-react'
import React from 'react'
import useTheme from '../utils/useTheme'
import Base from './Base'
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
    <Flex css={{ padding: theme.spacing[4] }}>
      <Base
        css={{
          marginRight: theme.spacing[2],
          lineHeight: theme.lineHeights.tight,
          color: theme.colors.green[8],
        }}
      >
        <Octicon icon={GitPullRequest} />
      </Base>
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
