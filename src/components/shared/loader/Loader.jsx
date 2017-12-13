import React from 'react'
import style from './Loader.scss'

function Loader (props) {
  return (
    <div className={style.loader}>
      <div className={style.border} />
      <span className={style.letter}>Y</span>
    </div>
  )
}

export default Loader
