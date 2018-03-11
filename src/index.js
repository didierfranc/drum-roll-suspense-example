import React, { unstable_AsyncMode as Async } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <Async>
    <App />
  </Async>,
  document.getElementById('root'),
)

if (typeof module.hot === 'object') module.hot.accept()
