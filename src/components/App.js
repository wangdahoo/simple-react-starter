import React, { Component } from 'react'

const styles = {
  container: {height: '100%'}
}

const App = ({ children }) => (
  <div style={ styles.container }>
    {children}
  </div>
)

export default App

