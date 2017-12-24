import React from 'react'
import { Switch, Route, HashRouter as Router } from 'react-router-dom'
import Async from '@/components/decorators/Async'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

import styles from './App.scss'

function App () {
  return (
    <Router>
      <div className={styles.page}>
        <Header>
          {'Hacker news clone'}
        </Header>

        <div className={styles.content}>
          <Switch>
            <Route component={Async('ItemPage', () => import('@/components/pages/Item'))} path="/item/:id" />
            <Route component={Async('HomePage', () => import('@/components/pages/Home'))} extact path="/" />
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
