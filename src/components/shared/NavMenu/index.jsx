import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuItem from '../MenuItem'
import './NavMenu.scss'

class MainMenu extends Component {
  static propTypes = {
    links: PropTypes.array.isRequired
  }

  constructor (...args) {
    super(...args)

    this.state = {
      isOpen: false
    }
  }

  handleMenuOpen = () => this.setState({
    isOpen: !this.state.isOpen
  })

  handleMenuClose = () => this.setState({
    isOpen: false
  })

  render () {
    return (
      <div className="nav-menu">
        <div className="nav-menu-open-btn">
          <i
            aria-hidden="true"
            className={`fa ${this.state.isOpen ? 'fa-times' : 'fa-bars'} fa-2x`}
            onClick={this.handleMenuOpen}
          />
        </div>

        <div className={`nav-menu-links ${this.state.isOpen ? 'nav-menu-links-show' : ''}`}>
          {this.props.links.map(link => (<MenuItem {...link} key={link.to} onClick={this.handleMenuClose} />))}
        </div>
      </div>
    )
  }
}

export default MainMenu
