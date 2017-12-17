import React from 'react'
import { connect } from 'react-redux'
import { TOPSTORIES, NEWSTORIES, BESTSTORIES } from '@/entities/constants'
import { selectNewsType } from '@/actions'
import style from './NewsFilter.scss'

function NewsFilter (props) {
  return (
    <div className={style['news-filter']}>
      <div onClick={() => props.selectNewsType(TOPSTORIES)}>TOP</div>
      <div onClick={() => props.selectNewsType(NEWSTORIES)}>NEW</div>
      <div onClick={() => props.selectNewsType(BESTSTORIES)}>BEST</div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  selectNewsType: type => dispatch(selectNewsType(type))
})

export default connect(null, mapDispatchToProps)(NewsFilter)
