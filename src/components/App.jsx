import React, { Fragment } from 'react'
import Header from './shared/Header/Header.jsx'
import Home from '@/components/pages/Home/Home'
import NewsItemPage from '@/components/pages/News-item-page/News-item-page'
import { Switch, Route, Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

function App () {
  return (
    <Fragment >
      <Header>
        {'Hacker news clone'}
      </Header>

      <Router history={history}>
        <Switch>
          <Route component={Home} extact path="/" />
          <Route component={NewsItemPage} path="/item/:id" />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App
