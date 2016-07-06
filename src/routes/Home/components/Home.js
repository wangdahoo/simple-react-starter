import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import Page from '../../../layouts/Page'

// ----------------------------------------
// Nav Items
// ----------------------------------------
const navItemRight = <button className={'btn btn-clear btn-icon'}>
  <i className={'ion ion-ios-refresh-empty'}></i>
</button>

// ----------------------------------------
// Nav Item Handlers
// ----------------------------------------
const onNavItemRightClick = () => {
  // your magic here
}

// ----------------------------------------
// Page Content
// ----------------------------------------

const styles = {
  list: {
    paddingLeft: '20px',
    backgroundColor: '#FFF',
  },
  item: {
    backgroundColor: '#FFF',
    height: 100,
    width: '100%',
    padding: '20px 24px 20px 0',
    textAlign: 'left',
    borderBottom: '1px solid #DDD'
  },
  arrowRight: {
    color: '#DDD',
    float: 'right',
    fontSize: '48px',
    lineHeight: '60px'
  },
  title: {
    color: '#444',
    fontSize: '28px',
    lineHeight: '60px'
  }
}

const goTo = (path) => {
  browserHistory.push(path)
}

const content = <div className={'page-content'}>
  <div style={{ paddingLeft: '20px' }}>
    <h1>Welcome!</h1>
    <p>A simple react starter.</p>
  </div>

  <div style={styles.list}>
    <div style={styles.item} onClick={() => {
      goTo('/counter')
    }}>
      <span style={styles.title}>Counter</span>
      <i className="ion ion-ios-arrow-right" style={styles.arrowRight}></i>
    </div>

    <div style={styles.item} onClick={() => {
      goTo('/todos')
    }}>
      <span style={styles.title}>Todos</span>
      <i className="ion ion-ios-arrow-right" style={styles.arrowRight}></i>
    </div>

    <div style={styles.item} onClick={() => {
      goTo('/about')
    }}>
      <span style={styles.title}>About</span>
      <i className="ion ion-ios-arrow-right" style={styles.arrowRight}></i>
    </div>
  </div>
</div>

const Home = () => {
  return (
    <Page title={'首页'}
          navItemRight={navItemRight}
          onNavItemRightClick={onNavItemRightClick}
          content={content}/>
  )
}

export default Home
