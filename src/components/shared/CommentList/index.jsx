import React from 'react'
import PropTypes from 'prop-types'
import Comment from '../Comment'
import './CommentList.scss'

function CommentList (props) {
  return (
    <div className="comment-list">
      {props.commentsId.length
        ? props.commentsId.map(id => <Comment id={id} key={id} />)
        : null}
    </div>
  )
}

Comment.propTypes = {
  commentsId: PropTypes.array.isRequired
}

export default CommentList
