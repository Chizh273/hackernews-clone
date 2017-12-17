import React from 'react'
import PropTypes from 'prop-types'
import style from './Button.scss'

function Button (props) {
  return (
    <div className={style.button} {...props}>
      {props.children}
    </div>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired
}

export default Button
