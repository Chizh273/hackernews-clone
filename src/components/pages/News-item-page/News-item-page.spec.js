import React from 'react'
import ReactDOM from 'react-dom'
import NewsItemPage from './News-item-page'

describe('News-item-page.jsx', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<NewsItemPage />, div)
  })
})
