import React from 'react'
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
const content = <div className={'page-content padding-horizontal'}>About</div>

const About = () => (
  <Page title={'About'}
        navItemLeft={navItemLeft}
        onNavItemLeftClick={onNavItemLeftClick}
        content={content}/>
)

export default About
