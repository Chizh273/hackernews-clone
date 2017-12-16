import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { loadNews } from '../../../actions'
import NewsItem from '../../shared/News-item/News-item'
import { getChunkNews } from '../../../selectors'
import style from './Home.scss'
import Loader from '../../shared/Loader/Loader'

class Home extends Component {
  static propTypes = {
    news: PropTypes.array.isRequired
  }

  componentWillMount () {
    this.props.loadNews()
  }

  render () {
    if (this.props.isLoading) {
      return <Loader />
    }

    return (
      <div className={style.home}>
        {this.props.news.map(id => <NewsItem id={id} key={id} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  news: getChunkNews(state),
  isLoading: state.isLoading
})

export default connect(mapStateToProps, {loadNews})(Home)
