import React, { Component } from 'react'

import Ad from './Ad'

class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'hello'
    }
    this.msg = 'this is man'
  }

  static displayName = 'aaa'

  shhouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <>
      <Ad title={this.state.msg}></Ad>
      <div>
        <button onClick={this.handleClick.bind(this)}>click</button>
      </div>
      </>
    )
  }

  handleClick() {
    this.setState({
      msg:'world'
    })
  }
}

export default Test