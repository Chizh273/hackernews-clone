import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg'
import style from './Header.scss'

function Header (props) {
  return (
    <header className={style.header}>
      <Link to="/">
        <img alt="logo" className={style['header-logo']} src={logo} />
      </Link>

      { props.children }
    </header>
  )
}

export default Header
