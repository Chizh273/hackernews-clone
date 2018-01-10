import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import Async from './decorators/Async'
import Header from './shared/Header'
import NavMenu from './shared/NavMenu'
import Footer from './shared/Footer'
import history from '../routing/history'
import links from '../routing/links'

import './App.scss'

function App () {
  return (
    <Router history={history}>
      <div className="page">
        <Header>
          <h1> {'Hacker news clone'} </h1>

          <NavMenu links={links} />
        </Header>

        <div className="content">
          <Switch>
            <Route component={Async('ItemPage', () => import('./pages/Item'))} path="/item/:id" />
            <Route component={Async('HomePage', () => import('./pages/Home'))} path="/" />
          </Switch>
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  )
}

export default App
