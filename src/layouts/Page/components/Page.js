import React, { Component, PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Page = (props) => {
  let header;

  if (props.title) {
    header = <div className={'page-header'}>
      <div className={'nav-item left'} onClick={props.onNavItemLeftClick}>
        {props.navItemLeft}
      </div>

      <div className={'title'}>
        {props.title || ''}
      </div>

      <div className={'nav-item right'} onClick={props.onNavItemRightClick}>
        {props.navItemRight || ''}
      </div>
    </div>
  }

  return (
    <div className={'page-wrapper'}>
      {header}
      {props.content}
    </div>
  )
}

Page.propTypes = {
  title: PropTypes.string,
  navItemLeft: PropTypes.element,
  navItemRight: PropTypes.element,
  onNavItemLeftClick: PropTypes.func,
  onNavItemRightClick: PropTypes.func
}

export default Page
