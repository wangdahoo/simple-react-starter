import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import './styles/app.scss'

/* 1. 以PlainObject方式配置路由 */
import App from './components/App'

const routes = {
  path: '/',
  component: App,
  getIndexRoute(partialNextState, cb) {
    require.ensure([], (require) => {
      const Home = require('./routes/Home').default;

      cb(null, [
        Home
      ])
    })
  },
  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      const Counter = require('./routes/Counter').default;
      const About = require('./routes/About').default;
      const Todos = require('./routes/Todos').default;

      cb(null, [
        Counter,
        About,
        Todos
      ])
    })
  }
};

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
)


/* 2. 以JSX的方式配置路由 */
//import App from './components/App'
//import Home from './routes/Home/components/Home'
//import Counter from './routes/Counter/components/Counter'
//import About from './routes/About/components/About'
//
//render(
//  <Router history={browserHistory}>
//    <Route path="/" component={App}>
//      <IndexRoute component={Home} />
//      <Route path="counter" component={Counter} />
//      <Route path="about" component={About} />
//    </Route>
//  </Router>,
//  document.getElementById('root')
//);
