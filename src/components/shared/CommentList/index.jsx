import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import Comment from '../Comment'
import './CommentList.scss'

function CommentList (props) {
  return (
    <div className="comment-list">
      {!isEmpty(props.commentsId)
        ? props.commentsId.map(id => <Comment id={id} key={id} />)
        : null}
    </div>
  )
}

CommentList.propTypes = {
  commentsId: PropTypes.array.isRequired
}

export default CommentList
