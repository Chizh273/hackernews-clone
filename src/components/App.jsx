import React, { Fragment } from 'react'
import Header from './shared/header/Header.jsx'
import style from './App.scss'

function App () {
  return (
    <Fragment>
      <Header>
        {'Hacker news clone'}
      </Header>
      <p className={style['App-intro']}>
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </Fragment>
  )
}

export default App
