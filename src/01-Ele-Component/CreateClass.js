import React, { Fragment } from 'react'
import createClass from "create-react-class";

import ClassComponent from './ClassComponent'
import Func from './Func'

export default createClass({
  render () {
    return (
      <fragment>
        <ClassComponent></ClassComponent>
        <Func></Func>
        <div>title</div>
      </fragment>
  	)
  }
})