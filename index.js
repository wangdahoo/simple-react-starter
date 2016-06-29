import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

const Greetings = () => (
  <h1>Hello!</h1>
)

render(
  <Greetings />,
  document.getElementById('content')
)
