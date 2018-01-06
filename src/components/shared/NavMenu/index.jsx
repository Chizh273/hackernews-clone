import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
  ASKSTORIES,
  JOBSTORIES,
  SHOWSTORIES,
  BESTSTORIES,
  NEWSTORIES,
  TOPSTORIES
} from '../../../entities/constants'

import './NavMenu.scss'

class MainMenu extends Component {
  constructor (...args) {
    super(...args)

    this.state = {
      isOpen: false
    }
  }

  handleMenuOpen = () => this.setState({
    isOpen: !this.state.isOpen
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
          <NavLink to={`/${TOPSTORIES}`}>
            <i aria-hidden="true" className="fa fa-arrow-up" />
            <span>Top</span>
          </NavLink>
          <NavLink to={`/${NEWSTORIES}`}>
            <i aria-hidden="true" className="fa fa-newspaper-o" />
            <span>News</span>
          </NavLink>
          <NavLink to={`/${BESTSTORIES}`}>
            <i aria-hidden="true" className="fa fa-thumbs-o-up" />
            <span>Best</span>
          </NavLink>
          <NavLink to={`/${ASKSTORIES}`}>
            <i aria-hidden="true" className="fa fa-question-circle-o" />
            <span>Ask</span>
          </NavLink>
          <NavLink to={`/${JOBSTORIES}`}>
            <i aria-hidden="true" className="fa fa-building-o" />
            <span>Job</span>
          </NavLink>
          <NavLink to={`/${SHOWSTORIES}`}>
            <i aria-hidden="true" className="fa fa-eye" />
            <span>Show</span>
          </NavLink>
        </div>
      </div>
    )
  }
}

export default MainMenu
