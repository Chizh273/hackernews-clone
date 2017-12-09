import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'

describe('Header.spec.js', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Header />, div)
  })

  it('component render children text', () => {
    const testText = 'some test text'
    const div = document.createElement('div')
    ReactDOM.render(
      <Header>
        {testText}
      </Header>,
      div
    )

    expect(div.querySelector('h2').textContent).toBe(testText)
  })
})
