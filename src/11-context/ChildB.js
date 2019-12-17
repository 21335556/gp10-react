import React, { Component } from 'react'

import ChildBA from './ChildBA'

import employeeContext from './employee-context'

class ChildB extends Component {
  render() {
    let { Provider } = employeeContext
    return (
      <Provider value="exp-huanhuan">
        <ChildBA></ChildBA>
      </Provider>
    )
  }
}

export default ChildB