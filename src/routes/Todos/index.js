export default {
  path: 'todos',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Todos').default)
    })
  }
}
