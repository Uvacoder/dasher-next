import { RouteComponentProps } from '@reach/router'
import React from 'react'

interface BoardProps extends RouteComponentProps {
  boardId?: string
}

const Board = ({ boardId }: BoardProps) => {
  return <h1>Board {boardId}</h1>
}

export default Board
