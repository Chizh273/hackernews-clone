import React, { Fragment } from 'react'
import { Switch, Route, HashRouter as Router } from 'react-router-dom'
import Async from '@/components/decorators/Async'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

function App () {
  return (
    <Router>
      <Fragment>
        <Header>
          {'Hacker news clone'}
        </Header>
        <Switch>
          <Route component={Async('ItemPage', () => import('@/components/pages/Item'))} path="/item/:id" />
          <Route component={Async('HomePage', () => import('@/components/pages/Home'))} extact path="/" />
        </Switch>

        <Footer />
      </Fragment>
    </Router>
  )
}

export default App
