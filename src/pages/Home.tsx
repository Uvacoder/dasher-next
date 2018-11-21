import { RouteComponentProps } from '@reach/router'
import React, { Fragment } from 'react'
import Base from '../components/Base'

const Home = (props: RouteComponentProps) => {
  return (
    <Fragment>
      <Base as="h1">Home</Base>
      <Base as="p">Hello World</Base>
    </Fragment>
  )
}

export default Home
