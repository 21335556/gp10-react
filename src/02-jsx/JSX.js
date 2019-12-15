import React, { Component } from 'react'

class JSX extends Component {
  render() {
    const h = React.createElement
    return (
      h(
        'div',
        {
          className: 'app',
          id: 'appRoot'
        },
        h(
          'h1',
          {
            className: 'title',
          },
          '欢迎进入React的世界'
        ),
        h(
          'p',
          null,
          'React.js 是一个帮助你构建页面 UI 的库'
        )
      )
    )
  }
}

export default JSX