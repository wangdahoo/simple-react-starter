import React, { Component } from 'react'

const Page = (props) => (
  <div className={'page-wrapper'}>
    <div className={'page-header'}>
      <div className={'nav-btn left'}>
        {props.btnTextLeft || ''}
      </div>

      <div className={'title'}>
        {props.title || ''}
      </div>

      <div className={'nav-btn right'}>
        {props.btnTextRight || ''}
      </div>
    </div>

    {props.content}
  </div>
)

export default Page
