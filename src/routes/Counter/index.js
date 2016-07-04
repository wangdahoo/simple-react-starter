export default {
  path: 'counter',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Counter').default)
    })
  }
}
