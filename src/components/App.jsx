import React, { Fragment } from 'react'
import Header from './shared/Header/Header.jsx'
import Loader from './shared/loader/Loader'

function App () {
  return (
    <Fragment>
      <Header>
        {'Hacker news clone'}
      </Header>

      <Loader />

    </Fragment>
  )
}

export default App
