import React from 'react'
import style from './Item.scss'
import Comment from '../../shared/Comment/Comment'
import NewsItem from '../../shared/News-item/News-item'

function Item (props) {
  return (
    <div className={style['item-page']}>
      <NewsItem id={Number(props.match.params.id)} />
      <Comment id={487171} />
      <Comment id={2922429} />
    </div>
  )
}

export default Item
