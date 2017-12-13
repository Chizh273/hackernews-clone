import React, { Fragment } from 'react'
import Header from './shared/Header/Header.jsx'
import Home from './pages/Home/Home'

function App () {
  return (
    <Fragment>
      <Header>
        {'Hacker news clone'}
      </Header>

      <Home />

    </Fragment>
  )
}

export default App
