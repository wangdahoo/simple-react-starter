import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

//const routes = {
//  component: 'div',
//  childRoutes: [
//    require('./routes/Greetings'),
//    require('./routes/Counter'),
//    require('./routes/About')
//  ]
//};
//
//render(
//  <Router history={browserHistory} routes={routes} />,
//  document.getElementById('root')
//)


import Greetings from './routes/Greetings/components/Greetings'
import Counter from './routes/Counter/components/Counter'
import About from './routes/About/components/About'

render(
  <Router history={browserHistory}>
    <Route path="/" component={Greetings} />
    <Route path="/counter" component={Counter} />
    <Route path="/about" component={About} />
  </Router>,
  document.getElementById('root')
);
