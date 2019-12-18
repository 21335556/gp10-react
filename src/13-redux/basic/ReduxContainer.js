import React, { Component } from 'react'

import ReduxUI from './store/ReduxUI'

class ReduxContainer extends Component {
  render() {
    return (
      // count={this.props.count}
      <ReduxUI {...this.props}  handleIncrementClick= {this.handleIncrementClick.bind(this)} 
      handleDecrementClick= {this.handleDecrementClick.bind(this)}></ReduxUI>
    )
  }

  handleIncrementClick() {
    this.props.increment()
  }

  handleDecrementClick() {
    this.props.decrement()
  }

  componentDidMount() {
    this.props.loadData()
  }
}

export default ReduxContainer