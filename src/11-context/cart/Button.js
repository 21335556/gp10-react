import React from 'react'
import { ConterConsumer } from './Provider'

let Button = (props) => {
  return (
    <ConterConsumer>
      {
        function ({ incrementCount, decrementCount }) {
          let text = props.type === 'increment' ? '+' : '-'
          let event = props.type === 'increment' ? incrementCount : decrementCount
          return (
            <button onClick={event}>{text}</button>
          )
        }
      }
    </ConterConsumer>
  )
}

export default Button