import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import style from './Home.scss'
import NewsList from '@/components/shared/NewsList'
import Button from '@/components/shared/Button'
import { loadMoreNews } from '@/actions'

function Home (props) {
  return (
    <div className={style.home}>
      <Route component={NewsList} path="/:type" />
      <Route component={NewsList} exact path="/" strict />

      <Button onClick={() => props.loadMoreNews()}>
        Load more
      </Button>
    </div>
  )
}

export default connect(null, {loadMoreNews})(Home)
