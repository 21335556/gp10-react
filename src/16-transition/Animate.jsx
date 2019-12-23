import { CSSTransition } from 'react-transition-group'

import React, { Component } from 'react'

import './ani.css'

const styles = {
  width: '100px',
  height: '100px',
  background: 'red',
  color: 'yellow'
}

class Animate extends Component {
  state = {
    isShow: true
  }

  render() {
    return (
      <CSSTransition
        timeout={2000}
        in={this.state.isShow}
        classNames="fade"
        unmountOnExit
        onEnter={() => {
          console.log('onEnter');
        }}
        onExiting={() => {
          console.log('leaving');
        }}
        onExited={() => {
          console.log('leaved');
        }}
        onExit={() => {
          console.log('leave');
        }}
      >
        <>
          <div style={styles}>message</div>
          <div><button onClick={this.handleClick.bind(this)}>on/off</button></div>
        </>
      </CSSTransition>
    )
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        isShow: !prevState.isShow
      }
    })
  }
}

export default Animate
