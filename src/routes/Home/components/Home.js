import React, { Component } from 'react'
import { Link } from 'react-router'

import Page from '../../../layouts/Page'

const content = <div className={'page-content'}>Home Page</div>

const Home = () => {
  return (
    <Page title={'首页'} btnLeftText={'分类'} btnRightText={'刷新'} content={content} />
  )
}

export default Home
