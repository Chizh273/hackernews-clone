import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import style from './Comment.scss'
import { connect } from 'react-redux'
import { loadComment } from '../../../actions'
import isEmpty from 'lodash/isEmpty'
import Loader from '../Loader/Loader'

class Comment extends Component {
  componentWillMount () {
    if (isEmpty(this.props.comment)) {
      console.log('load', this.props.id)
      this.props.loadComment(this.props.id)
    }
  }

  render () {
    const {comment} = this.props
    console.log(this)
    if (this.props.isLoading || isEmpty(comment)) return <Loader />

    return (
      <div className={style.comment}>
        <div className={style['author-row']}>
          <strong className="user-name">{comment.by}</strong>

          <span className="time">
            {moment.unix(comment.time, 'x').fromNow()}
          </span>
        </div>

        <div
          className={style.text}
          dangerouslySetInnerHTML={{__html: comment.text}}
        />
        {comment.kids.length
          ? comment.kids.map(id => <Comment id={id} key={id} />)
          : null}
      </div>
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
