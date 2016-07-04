import React, { Component, PropTypes } from 'react'

type Props = {
  title: string,
  btnLeftText: string,
  btnRightText: string,
  onBtnLeftClick: Function,
  onBtnRightClick: Function,
}

const Page = (props: Props) => (
  <div className={'page-wrapper'}>
    <div className={'page-header'}>
      <div className={'nav-btn left'} onClick={props.onBtnLeftClick}>
        {props.btnLeftText || ''}
      </div>

      <div className={'title'}>
        {props.title || ''}
      </div>

      <div className={'nav-btn right'} onClick={props.onBtnRightClick}>
        {props.btnRightText || ''}
      </div>
    </div>

    {props.content}
  </div>
)

Page.propTypes = {
  title: PropTypes.string,
  btnLeftText: PropTypes.string,
  btnRightText: PropTypes.string,
  onBtnLeftClick: PropTypes.func,
  onBtnRightClick: PropTypes.func
}

export default Page
