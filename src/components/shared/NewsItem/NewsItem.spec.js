import React from 'react'
import ReactDOM from 'react-dom'
import NewsItem from './NewsItem'

describe('NewsItem.jsx', () => {
  const news = {}

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<NewsItem news={news} />, div)
  })
})
