import React from 'react'
import logo from './logo.svg'
import style from './Header.scss'

function Header (props) {
  return (
    <header className={style.header}>
      <img alt="logo" className={style['header-logo']} src={logo} />
      <h2 className={style['header-title']}>
        { props.children }
      </h2>
    </header>
  )
}

export default Header
