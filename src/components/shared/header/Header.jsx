import React from 'react'
import logo from './logo.svg'
import './Header.css'

function Header () {
  return (
    <div className="app-header">
      <img className="header-logo" src={logo} alt="logo"/>
      <h1 className="header-title">Hacker news clone</h1>
    </div>
  )
}

export default Header
