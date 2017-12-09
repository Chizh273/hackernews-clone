import React from 'react'
import Header from './shared/header/Header.jsx'
import './App.scss'

function App () {
  return (
    <div className="App">
      <Header>
        {'Hacker news clone'}
      </Header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  )
}

export default App
