import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg'
import './Header.scss'

function Header (props) {
  return (
    <header className="header">
      <Link to="/">
        <img alt="logo" className="header-logo" src={logo} />
      </Link>

      { props.children }
    </header>
  )
}

export default Header
