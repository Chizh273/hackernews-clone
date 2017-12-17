import React from 'react'
import PropTypes from 'prop-types'
import style from './CommentList.scss'
import Comment from '@/components/shared/Comment'

function CommentList (props) {
  return (
    <div className={style['comment-list']}>
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
