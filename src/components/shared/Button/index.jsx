import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

function Button (props) {
  return (
    <div className="button" {...props}>
      {props.children}
    </div>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired
}

export default Button
