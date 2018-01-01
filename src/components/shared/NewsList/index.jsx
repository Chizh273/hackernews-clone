import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import { loadMoreNews, loadNews } from '@/actions'
import Loader from '@/components/shared/Loader'
import NewsItem from '@/components/shared/NewsItem'
import { TOPSTORIES } from '@/entities/constants'

class NewsList extends Component {
  static propTypes = {
    isLoading: PropTypes.bool
  }

  static defaultProps = {
    isLoading: true
  }

  componentWillMount () {
    if (!this.props.news.length && !this.props.isLoading) {
      this.props.loadNews(this.props.match ? this.props.match.params.type : TOPSTORIES)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.match && isEmpty(nextProps.news) && this.props.match.params.type !== nextProps.match.params.type) {
      this.props.loadNews(nextProps.match.params.type)
    }
  }

  render () {
    if (this.props.isLoading) {
      return <Loader />
    }

    return (
      <div className="news">
        {this.props.news.map(id => <NewsItem id={id} key={id} />)}
      </div>
    )
  }
}

const mapStateToProps = ({news}, {match}) => {
  const type = (match && match.params.type) ? match.params.type : TOPSTORIES

  return {
    news: news[type] ? news[type].idsArray.slice(0, news.countToDisplay[type]) : [],
    isLoading: news.isLoading
  }
}

export default connect(mapStateToProps, {loadNews, loadMoreNews})(NewsList)
