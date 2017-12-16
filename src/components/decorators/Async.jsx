import React, { Component } from 'react'
import Loader from '../shared/Loader/Loader'
import { Redirect } from 'react-router-dom'

function Async (name, getComponent) {
  return class Async extends Component {
    static displayName = `Async${name}`;

    constructor (...args) {
      super(...args)

      this.state = {
        Component: null,
        isError: false
      }
    }

    async componentWillMount () {
      if (!this.state.Component) {
        try {
          const Component = (await getComponent()).default
          this.setState({Component})
        } catch (e) {
          this.setState({isError: true})
        }
      }
    }

    render () {
      const {Component, isError} = this.state

      if (!Component) {
        return <Loader />
      }

      if (isError) {
        return <Redirect to="/" />
      }

      return <Component {...this.props} />
    }
  }
}

Async.propTypes = {}

export default Async
