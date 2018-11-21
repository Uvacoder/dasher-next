import { Router } from '@reach/router'
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from './components/GlobalStyle'
import Board from './pages/Board'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { ThemeProvider } from './styled-components'
import theme from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Router>
          <Home path="/" />
          <Board path="/board/:boardId" />
          <NotFound default />
        </Router>
      </Fragment>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
