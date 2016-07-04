import React from 'react'
import { Link } from 'react-router'

const Counter = () => (
  <div>
    <Link to="/greetings">Back</Link>
    <h3>
      Counter: 0
    </h3>
  </div>
)

export default Counter
