import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import { loadMoreNews, loadNews } from '../../../actions'
import Loader from '../Loader'
import NewsItem from '../NewsItem'
import { getNewsCurrentType, getChunkNews } from '../../../selectors'
import './NewsList.scss'
import { Helmet } from 'react-helmet'
import capitalize from '../../../utills/capitalize'

class NewsList extends Component {
  static propTypes = {
    isLoading: PropTypes.bool
  }

  static defaultProps = {
    isLoading: true
  }

  componentDidMount () {
    if (!this.props.news.length && !this.props.isLoading) {
      this.props.loadNews(this.props.type)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (isEmpty(nextProps.news) && this.props.type !== nextProps.type) {
      this.props.loadNews(nextProps.type)
    }
  }

  render () {
    if (this.props.isLoading) {
      return <Loader />
    }

    return (
      <div className="news-list">
        <Helmet>
          <title>{capitalize(this.props.type)} | Hacker news clone</title>
          <meta content="Hacker news clone by Chizh273" name="description" />
        </Helmet>

        {this.props.news.map(id => <NewsItem id={id} key={id} />)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  news: getChunkNews(state),
  type: getNewsCurrentType(state),
  isLoading: state.news.isLoading
})

export default connect(mapStateToProps, {loadNews, loadMoreNews})(NewsList)
