import React from 'react'

import {
  ConterConsumer
} from './Provider'

let Counter = (props) => {
  return (
    <ConterConsumer>
      {
        function ({count}) {
          return count
        }
      }
    </ConterConsumer>
  )
}

export default Counter