import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import Loader from '../../shared/Loader'
import CommentList from '../../shared/CommentList'
import { loadNewsItem } from '../../../actions'
import formatUnixDate from '../../../utills/formatUnixDate'
import { DATE_FORMAT_DMY_HMA } from '../../../utills/constants'
import './Item.scss'

class Item extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    item: PropTypes.shape({
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
    isLoading: false,
    item: {}
  }

  componentDidMount () {
    if (isEmpty(this.props.item)) {
      this.props.loadNewsItem(this.props.match.params.id)
    }
  }

  render () {
    const {item} = this.props

    if (isEmpty(this.props.item) || this.props.isLoading) return <Loader />
    console.log(item.kids)
    return (
      <div className="item-page">
        <div className="news">
          <div className="item-page-row">
            <h1>{item.title}</h1>
            <a href={item.url}>
              <i aria-hidden="true" className="fa fa-external-link" />
            </a>
          </div>
          <div className="item-page-row">
            <strong className="item-page-author">
              {item.by}
            </strong>
            <span className="item-page-time">
              {formatUnixDate(item.time, DATE_FORMAT_DMY_HMA)}
            </span>
          </div>
        </div>

        {item.kids
          ? <CommentList commentsId={item.kids} />
          : null }

      </div>
    )
  }
}

const mapStateToProps = ({news}, {match: {params}}) => ({
  isLoading: news.items[params.id] ? news.items[params.id].isLoading : false,
  item: news.items[params.id]
})

const mapDispatchToProps = dispatch => ({
  loadNewsItem: (id) => dispatch(loadNewsItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Item)
