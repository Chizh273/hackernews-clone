import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import Async from '@/components/decorators/Async'
import Header from '@/components/shared/Header'
import NavMenu from '@/components/shared/NavMenu'
import Footer from '@/components/shared/Footer'
import history from '@/routing/history'

import styles from './App.scss'

function App () {
  return (
    <Router history={history}>
      <div className={styles.page}>
        <Header>
          <h1> {'Hacker news clone'} </h1>

          <NavMenu />
        </Header>

        <div className={styles.content}>
          <Switch>
            <Route component={Async('ItemPage', () => import('@/components/pages/Item'))} path="/item/:id" />
            <Route component={Async('HomePage', () => import('@/components/pages/Home'))} path="/" />
          </Switch>
        </div>

        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </Router>
  )
}

export default App
