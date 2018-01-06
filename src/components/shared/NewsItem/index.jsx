import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import Loader from '../Loader'
import { loadNewsItem } from '../../../actions'
import formatUnixDate from '../../../utills/formatUnixDate'
import { DATE_FORMAT_DMY_HMA } from '../../../utills/constants'
import './NewsItem.scss'

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

  componentDidMount () {
    if (isEmpty(this.props.news)) {
      this.props.loadNewsItem(this.props.id)
    }
  }

  getArrowClassName (isShow) {
    return `fa fa-angle-down fa-2x news-item-arrow ${isShow ? 'news-item-rotate' : ''}`
  }

  getDetailsRow () {
    const {news} = this.props
    return (
      <Fragment>
        <span>
          <strong>{news.score}</strong> points
        </span>
        <span>
          by <strong>{news.by}</strong>
        </span>
        <span>
          <strong>{news.descendants}</strong> comment
        </span>
        <span>
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
      <div className="news-item">

        <div className="news-item-main-row news-item-row">
          <a className="news-item-title" href={news.url}>{news.title}</a>
          <i
            aria-hidden="true"
            className={this.getArrowClassName(isShow)}
            onClick={this.handleToggle}
          />
        </div>

        {isShow ? (
          <div className="news-item-detail-row">
            {this.getDetailsRow()}

            <div className="news-item-open-item">
              <Link to={`/item/${this.props.id}`}>
                Open comments
                <i aria-hidden="true" className="fa fa-long-arrow-right" />
              </Link>
            </div>
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
