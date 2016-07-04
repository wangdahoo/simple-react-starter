import React, { Component } from 'react'
import { Link } from 'react-router'

import Page from '../../../layouts/Page'

const content = <div className={'page-content'}>Home Page</div>

const navItemLeft = <button className={'btn btn-clear'}>欢迎</button>
const navItemRight = <button className={'btn btn-clear btn-icon'}>
  <i className={'ion ion-ios-refresh-empty'}></i>
</button>

const Home = () => {
  return (
    <Page title={'首页'} navItemLeft={navItemLeft} navItemRight={navItemRight} content={content} />
  )
}

export default Home
