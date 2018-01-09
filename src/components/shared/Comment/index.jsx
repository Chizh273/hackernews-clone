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
  static propTypes = {
    comment: PropTypes.shape({
      by: PropTypes.string,
      id: PropTypes.number,
      kids: PropTypes.array,
      parent: PropTypes.number,
      text: PropTypes.string,
      time: PropTypes.number,
      type: PropTypes.string,
      deleted: PropTypes.boolean
    }),
    id: PropTypes.number.isRequired,
    isLoading: PropTypes.bool
  }

  static defaultProps = {
    comment: {},
    isLoading: false
  }

  state = {
    isOpen: false
  }

  componentDidMount () {
    if (isEmpty(this.props.comment)) {
      this.props.loadComment(this.props.id)
    }
  }

  checkChildrenComment = (comment) => comment.kids && comment.kids.length

  handleToggleOpen = () => this.setState({isOpen: !this.state.isOpen})

  getToggleElement () {
    return (
      <span className="comment-toggle-element" onClick={this.handleToggleOpen}>
        [
        <i
          aria-hidden
          className={`fa fa-${this.state.isOpen ? 'minus' : 'plus'}`}
        />
        ]
      </span>
    )
  }

  getCommentWrapper = (elements) => (
    <div className="comment">
      {elements}
    </div>
  )

  render () {
    const {comment} = this.props

    if (this.props.isLoading || isEmpty(comment)) {
      return <Loader />
    }

    if (comment.deleted) {
      return this.getCommentWrapper(<div className="comment-deleted">Sorry. This comment was deleted...</div>)
    }

    return (
      <Fragment>
        {this.getCommentWrapper(
          <Fragment>
            <div className="comment-author-row">
              <strong className="user-name">{comment.by}</strong>

              <span className="time">
                {getTimeAgo(comment.time)}
              </span>
              {
                this.checkChildrenComment(
                  comment) ? this.getToggleElement() : null
              }
            </div>

            <div
              className='comment-text'
              dangerouslySetInnerHTML={{__html: comment.text}}
            />
          </Fragment>
        )}
        {this.state.isOpen && this.checkChildrenComment(comment)
          ? <CommentList commentsId={comment.kids} />
          : null}
      </Fragment>
    )
  }
}

const mapStateToProps = ({comments}, {id}) => ({
  isLoading: comments.has(id) ? comments.get(id).get('isLoading') : null,
  comment: comments.has(id) ? comments.get(id).toJS() : {}
})

const mapDispatchToProps = (dispatch) => ({
  loadComment: (id) => dispatch(loadComment(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
