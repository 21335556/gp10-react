import React from 'react'
import ReactDOM from 'react-dom'

// import { Provider } from 'react-redux'

// import store from './13-redux/store/'

// import { HomeContainer as Home } from './13-redux/home/'
// import { SearchContainer as Search } from './13-redux/search'

import { BrowserRouter as Router } from 'react-router-dom'

import ReactRouter from './14-router/ReactRouter'

ReactDOM.render(
  <Router>
    <ReactRouter></ReactRouter>
  </Router>,
  document.querySelector('#root')
)