import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import style from './Home.scss'
import { loadNews, loadMoreNews } from '@/actions'
import { getChunkNews } from '@/selectors'
import NewsItem from '@/components/shared/NewsItem'
import Loader from '@/components/shared/Loader'
import Button from '@/components/shared/Button'
import NewsFilter from '@/components/shared/NewsFilter'

class Home extends Component {
  static propTypes = {
    news: PropTypes.array.isRequired
  }

  componentDidMount () {
    this.props.loadNews()
  }

  componentWillReceiveProps (nextProps) {
    if (isEmpty(nextProps.news) && this.props.currentType !== nextProps.currentType) {
      this.props.loadNews()
    }
  }

  handleLoadMore = () => this.props.loadMoreNews()

  render () {
    if (this.props.isLoading) {
      return <Loader />
    }

    return (
      <div className={style.home}>
        <NewsFilter />

        <div className="news">
          {this.props.news.map(id => <NewsItem id={id} key={id} />)}
        </div>

        <Button onClick={this.handleLoadMore}>
          Load more
        </Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  news: getChunkNews(state),
  isLoading: state.news.isLoading,
  currentType: state.news.currentType
})

export default connect(mapStateToProps, {loadNews, loadMoreNews})(Home)
