import React from 'react'
import useTheme from '../utils/useTheme'
import Base from './Base'
import Issue from './Issue'

const issues: Issue[] = [
  { title: '[RFC] Private API prototypes' },
  { title: '[wip] Document principles' },
]

const IssueList = () => {
  const theme = useTheme()
  return (
    <Base
      css={{
        '& > *:not(:last-child)': {
          borderBottom: `1px solid ${theme.colors.grayAlpha[2]}`,
        },
      }}
    >
      {issues.map(issue => (
        <Issue key={issue.title} issue={issue} />
      ))}
    </Base>
  )
}

export default IssueList
