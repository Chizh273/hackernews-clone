import React from 'react'
import logo from './logo.svg'
import style from './Header.scss'

function Header (props) {
  return (
    <header className={style.header}>
      <img alt="logo" className={style['header-logo']} src={logo} />
      <h1 className={style['header-title']}>
        { props.children }
      </h1>
    </header>
  )
}

export default Header
