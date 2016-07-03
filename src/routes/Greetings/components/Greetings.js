import React, { Component } from 'react'
import { Link } from 'react-router'

class Greetings extends Component {

  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <p>A simple react starter.</p>

        <Link to="/counter" >Counter</Link>{' '}
        <Link to="/about" >About</Link>
      </div>
    )
  }
}

module.exports = Greetings
