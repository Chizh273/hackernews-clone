import React, { Fragment } from 'react'
import { Switch, Route, HashRouter as Router } from 'react-router-dom'
import Header from '@/components/shared/Header/Header.jsx'
import Async from '@/components/decorators/Async'

function App () {
  return (
    <Router>
      <Fragment>
        <Header>
          {'Hacker news clone'}
        </Header>
        <Switch>
          <Route component={Async('ItemPage', () => import('@/components/pages/Item/Item'))} path="/item/:id" />
          <Route component={Async('HomePage', () => import('@/components/pages/Home/Home'))} extact path="/" />
        </Switch>
      </Fragment>
    </Router>
  )
}

export default App
