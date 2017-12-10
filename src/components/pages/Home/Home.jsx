import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { loadNews } from '../../../actions'
import NewsItem from '../../shared/News-item/News-item'
import { getChunkNews } from '../../../selectors'
import style from './Home.scss'

class Home extends Component {
  static propTypes = {
    news: PropTypes.array.isRequired
  }

  componentWillMount () {
    this.props.loadNews()
  }

  render () {
    console.log(this.props.news)
    return (
      <div className={style.home}>
        {this.props.news.map(id => <NewsItem id={id} key={id} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  news: getChunkNews(state)
})

export default connect(mapStateToProps, {loadNews})(Home)
