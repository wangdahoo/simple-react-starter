import React, { Component } from 'react'
import { Link } from 'react-router'

import Page from '../../../layouts/Page'

const content = 'Home Page'

const Home = () => {
  return (
    <Page title={'首页'} btnTextLeft={'分类'} btnTextRight={'刷新'} content={content} />
  )
}

export default Home
