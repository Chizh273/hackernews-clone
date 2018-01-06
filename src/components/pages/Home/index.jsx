import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import NewsList from '../../shared/NewsList'
import Button from '../../shared/Button'
import { loadMoreNews } from '../../../actions'
import './Home.scss'

function Home (props) {
  return (
    <div className="home">
      <Route component={NewsList} path="/:type" />
      <Route component={NewsList} exact path="/" strict />

      <Button onClick={() => props.loadMoreNews()}>
        Load more
      </Button>
    </div>
  )
}

export default connect(null, {loadMoreNews})(Home)
