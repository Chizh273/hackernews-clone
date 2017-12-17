import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import style from './Home.scss'
import { loadNews, loadMoreNews } from '@/actions'
import { getChunkNews } from '@/selectors'
import NewsItem from '@/components/shared/NewsItem'
import Loader from '@/components/shared/Loader'
import Button from '@/components/shared/Button'

class Home extends Component {
  static propTypes = {
    news: PropTypes.array.isRequired
  }

  componentWillMount () {
    this.props.loadNews()
  }

  handleLoadMore = () => this.props.loadMoreNews()

  render () {
    if (this.props.isLoading) {
      return <Loader />
    }

    return (
      <div className={style.home}>
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
  isLoading: state.isLoading
})

export default connect(mapStateToProps, {loadNews, loadMoreNews})(Home)
