import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

function MenuItem ({to, icon, text, onClick}) {
  return (
    <NavLink onClick={onClick} to={to} >
      <i aria-hidden="true" className={`fa ${icon}`} />
      <span>{text}</span>
    </NavLink>
  )
}

MenuItem.defaultProps = {
  onClick: () => {}
}

MenuItem.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

export default MenuItem
