import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import style from './NewsItem.scss'
import Loader from '@/components/shared/Loader/Loader'
import { loadNewsItem } from '@/actions'
import formatUnixDate from '@/utills/formatUnixDate'
import { DATE_FORMAT_DMY_HMA } from '@/utills/constants'

class NewsItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    news: PropTypes.shape({
      by: PropTypes.string,
      descendants: PropTypes.number,
      score: PropTypes.number,
      time: PropTypes.number,
      title: PropTypes.string,
      type: PropTypes.string,
      url: PropTypes.string,
      kids: PropTypes.array
    })
  }

  static defaultProps = {
    news: {}
  }

  constructor (...args) {
    super(...args)

    this.state = {
      isShow: false
    }
  }

  componentWillMount () {
    if (isEmpty(this.props.news)) {
      this.props.loadNewsItem(this.props.id)
    }
  }

  getArrowClassName (isShow) {
    return `fa fa-angle-down fa-2x ${style.arrow} ${isShow ? style.rotate : ''}`
  }

  getDetailsRow () {
    const {news} = this.props
    return (
      <Fragment>
        <span className="points">
          <strong>{news.score}</strong> points
        </span>
        <span className="author">
          by <strong>{news.by}</strong>
        </span>
        <span className="comment-count">
          <strong>{news.descendants}</strong> comment
        </span>
        <span className={style.time}>
          {formatUnixDate(news.time, DATE_FORMAT_DMY_HMA)}
        </span>
      </Fragment>
    )
  }

  handleToggle = () => this.setState({isShow: !this.state.isShow})

  render () {
    const {isShow} = this.state
    const {news} = this.props

    if (news.isLoading) {
      return <Loader />
    }

    return (
      <div className={style['news-item']}>

        <div className={`${style.row} ${style['main-row']}`}>
          <a className={style.title} href={news.url}>{news.title}</a>
          <i
            aria-hidden="true"
            className={this.getArrowClassName(isShow)}
            onClick={this.handleToggle}
          />
        </div>

        {isShow ? (
          <div className={`${style['detail-row']}`}>
            {this.getDetailsRow()}

            <span className="open-item">
              <Link to={`/item/${this.props.id}`}>Open comments</Link>
            </span>
          </div>
        ) : null}

      </div>
    )
  }
}

const mapStateToProps = ({news}, ownProps) => ({
  news: news.items[ownProps.id] || {}
})

const mapDispatchToProps = (dispatch) => ({
  loadNewsItem: (id) => dispatch(loadNewsItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsItem)
