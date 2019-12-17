import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Redux from './13-redux/Redux'

import store from './13-redux/store/'

ReactDOM.render(
  <Provider store={store}>
    <Redux></Redux>
  </Provider>,
  document.querySelector('#root')
)

// console.log();