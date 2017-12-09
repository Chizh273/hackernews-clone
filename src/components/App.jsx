import React, { Fragment } from 'react'
import Header from './shared/Header/Header.jsx'
import NewsItem from './shared/News-item/News-item'
function App () {
  return (
    <Fragment>
      <Header>
        {'Hacker news clone'}
      </Header>

      <NewsItem />

    </Fragment>
  )
}

export default App
