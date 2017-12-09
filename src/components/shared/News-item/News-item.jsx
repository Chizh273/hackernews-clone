import React, { Component } from 'react'
import moment from 'moment'
import style from './News-item.scss'

const mock = {
  by: 'nradov',
  descendants: 76,
  id: 15886128,
  kids: [
    15886359,
    15886355,
    15886940,
    15886739,
    15887365,
    15886815,
    15886452,
    15887360,
    15887262,
    15887080,
    15886487,
    15887350,
    15886850,
    15886507,
    15887211,
    15886936,
    15887482,
    15886669,
    15886626,
    15886420,
    15887328,
    15886346,
    15886841,
    15886460,
    15886667
  ],
  score: 125,
  time: 1512832644,
  title: 'Superior IQs associated with mental and physical disorders, research suggests',
  type: 'story',
  url: 'https://www.scientificamerican.com/article/bad-news-for-the-highly-intelligent/'
}

class NewsItem extends Component {
  constructor (...args) {
    super(...args)

    this.state = {
      isShow: false
    }
  }

  getArrowClassName (isShow) {
    return `fa fa-angle-down fa-2x ${style.arrow} ${isShow ? style.rotate : ''}`
  }

  handleToggle = () => {
    const isShow = !this.state.isShow
    this.setState({isShow})
  }

  render () {
    const {isShow} = this.state

    return (
      <div className={style['news-item']}>
        <div className={`${style.row} ${style['main-row']}`}>
          <a className={style.title} href={mock.url}>
            {mock.title}
          </a>
          <i aria-hidden="true" className={this.getArrowClassName(isShow)} onClick={this.handleToggle} />
        </div>
        {isShow ? (
          <div className={style.row}>
            <span className="points">
              <strong>{mock.score}</strong> points
            </span>
            <span className="author">
              by <strong>{mock.by}</strong>
            </span>
            <span className="comment-count">
              <strong>{mock.descendants}</strong> comment
            </span>
            <span className="time">
              {moment.unix(mock.time, 'x').format('DD MMMM, YYYY - HH:mma')}
            </span>
          </div>
        ) : null}
      </div>
    )
  }
}

export default NewsItem
