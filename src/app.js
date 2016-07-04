import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import './styles/app.scss'

/* 1. 以PlainObject方式配置路由 */
//import App from './components/App'
//
//const routes = {
//  path: '/',
//  component: App,
//  getIndexRoute(partialNextState, cb) {
//    require.ensure([], (require) => {
//      const Home = require('./routes/Home').default;
//
//      cb(null, [
//        Home
//      ])
//    })
//  },
//  getChildRoutes(partialNextState, cb) {
//    require.ensure([], (require) => {
//      const Greetings = require('./routes/Greetings').default;
//      const Counter = require('./routes/Counter').default;
//      const About = require('./routes/About').default;
//
//      cb(null, [
//        Greetings,
//        Counter,
//        About
//      ])
//    })
//  }
//};
//
//render(
//  <Router history={browserHistory} routes={routes} />,
//  document.getElementById('root')
//)


/* 2. 以JSX的方式配置路由 */
import App from './components/App'
import Home from './routes/Home/components/Home'
import Greetings from './routes/Greetings/components/Greetings'
import Counter from './routes/Counter/components/Counter'
import About from './routes/About/components/About'

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="greetings" component={Greetings} />
      <Route path="counter" component={Counter} />
      <Route path="about" component={About} />
    </Route>
  </Router>,
  document.getElementById('root')
);
