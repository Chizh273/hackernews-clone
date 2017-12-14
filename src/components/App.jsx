import React, { Fragment } from 'react'
import Header from './shared/Header/Header.jsx'
import NewsItemPage from '@/components/pages/News-item-page/News-item-page'

function App () {
  return (
    <Fragment>
      <Header>
        {'Hacker news clone'}
      </Header>

      <NewsItemPage />

    </Fragment>
  )
}

export default App
