import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const styles = {
  container: {height: '100%'}
}

const App = ({ children, location }) => (
  <div style={ styles.container }>
    <ReactCSSTransitionGroup
      transitionName="page-transition-fade"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      {React.cloneElement(children, {
        key: location.pathname
      })}
    </ReactCSSTransitionGroup>
  </div>
)

export default App

