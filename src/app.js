import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

const routes = {
  path: '/',
  component: require('./routes/Greetings'),
  childRoutes: [
    require('./routes/Counter'),
    require('./routes/About')
  ]
}

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
)
