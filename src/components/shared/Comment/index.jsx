import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import { loadComment } from '../../../actions'
import Loader from '../Loader'
import CommentList from '../CommentList'
import getTimeAgo from '../../../utills/getTimeAgo'
import './Comment.scss'

class Comment extends Component {
  componentDidMount () {
    if (isEmpty(this.props.comment)) {
      this.props.loadComment(this.props.id)
    }
  }

  render () {
    const {comment} = this.props

    if (this.props.isLoading || isEmpty(comment)) return <Loader />

    return (
      <Fragment>
        <div className="comment">
          <div className="comment-author-row">
            <strong className="user-name">{comment.by}</strong>

            <span className="time">
              {getTimeAgo(comment.time)}
            </span>
          </div>

          <div
            className="comment-text"
            dangerouslySetInnerHTML={{__html: comment.text}}
          />
        </div>
        {comment.kids && comment.kids.length
          ? <CommentList commentsId={comment.kids} />
          : null}
      </Fragment>
    )
  }
}

Comment.defaultProps = {
  comment: {},
  isLoading: false
}

Comment.propTypes = {
  comment: PropTypes.shape({
    by: PropTypes.string,
    id: PropTypes.number,
    kids: PropTypes.array,
    parent: PropTypes.number,
    text: PropTypes.string,
    time: PropTypes.number,
    type: PropTypes.string
  }),
  id: PropTypes.number.isRequired,
  isLoading: PropTypes.bool
}

const mapStateToProps = (store, ownProps) => {
  return {
    ...store.comments[ownProps.id]
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadComment: (id) => dispatch(loadComment(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
