import React from 'react'
import { Switch, Route, HashRouter as Router, NavLink } from 'react-router-dom'
import Async from '@/components/decorators/Async'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import NavMenu from '@/components/shared/NavMenu'
import { BESTSTORIES, NEWSTORIES, TOPSTORIES } from '@/entities/constants'

import styles from './App.scss'

function App () {
  return (
    <Router>
      <div className={styles.page}>
        <Header>
          {'Hacker news clone'}
        </Header>

        <NavMenu>
          <NavLink to={`/${TOPSTORIES}`}>Top</NavLink>
          <NavLink to={`/${NEWSTORIES}`}>News</NavLink>
          <NavLink to={`/${BESTSTORIES}`}>Best</NavLink>
        </NavMenu>

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
