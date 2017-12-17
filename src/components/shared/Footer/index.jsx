import React from 'react'
import styles from './Footer.scss'

function Footer (props) {
  return (
    <div className={styles.footer} {...props}>
      Hacker News Clone by <a href="https://github.com/chizh273">Chizh273</a>
    </div>
  )
}

export default Footer
