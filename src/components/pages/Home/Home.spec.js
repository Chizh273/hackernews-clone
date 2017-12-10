import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'

describe('Home.jsx', () => {
  const news = []

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Home news={news} />, div)
  })
})
