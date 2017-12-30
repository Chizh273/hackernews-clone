import React from 'react'
import styles from './NavMenu.scss'

function Menu (props) {
  return (
    <div className={styles['nav-menu']}>
      {props.children}
    </div>
  )
}

export default Menu
