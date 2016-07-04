import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import Page from '../../../layouts/Page'

// ----------------------------------------
// Nav Items
// ----------------------------------------
const navItemLeft = <button className={'btn btn-clear btn-icon'}>
  <i className={'ion ion-ios-arrow-left'}></i>
</button>

// ----------------------------------------
// Nav Item Handlers
// ----------------------------------------
const onNavItemLeftClick = () => {
  browserHistory.goBack()
}

// ----------------------------------------
// Page Content Component
// ----------------------------------------
class MyCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  increase() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div className={'page-content padding-horizontal'}>
        <p>Counter: {this.state.counter}</p>
        <button className={'btn btn-danger'} onClick={this.increase.bind(this)}>点击</button>
      </div>
    )
  }
}

const Counter = () => (
  <Page title={'Counter'}
        navItemLeft={navItemLeft}
        onNavItemLeftClick={onNavItemLeftClick}
        content={ <MyCounter /> } />
)

export default Counter
