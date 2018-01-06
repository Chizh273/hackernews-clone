import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './components/App'
import store from './store'
import 'moment/locale/en-gb'
import 'scss/index.scss'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
