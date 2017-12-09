import React from 'react'
import logo from './logo.svg'
import './Header.scss'

function Header (props) {
  return (
    <header className="app--header">
      <img alt="logo" className="header-logo" src={logo} />
      <h2>
        { props.children }
      </h2>
    </header>
  )
}

export default Header
