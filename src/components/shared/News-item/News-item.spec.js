import React from 'react'
import ReactDOM from 'react-dom'
import NewsItem from './News-item'

describe('News-item.jsx', () => {
  const news = {}

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<NewsItem news={news} />, div)
  })
})
