import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import Page from '../../../layouts/Page'

// ----------------------------------------
// Nav Items
// ----------------------------------------
const navItemLeft = <button className={'btn btn-clear'}>Greetings</button>
const navItemRight = <button className={'btn btn-clear btn-icon'}>
  <i className={'ion ion-ios-refresh-empty'}></i>
</button>

// ----------------------------------------
// Nav Item Handlers
// ----------------------------------------
const onNavItemLeftClick = () => {
  browserHistory.push('/greetings');
}

// ----------------------------------------
// Page Content
// ----------------------------------------
const content = <div className={'page-content padding-horizontal'}>Home Page</div>

const Home = () => {
  return (
    <Page title={'首页'}
          navItemLeft={navItemLeft}
          navItemRight={navItemRight}
          onNavItemLeftClick={onNavItemLeftClick}
          content={content} />
  )
}

export default Home
