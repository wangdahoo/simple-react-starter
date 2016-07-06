import _ from 'underscore'
const TODOS = 'TODOS'

if (!localStorage)
  throw new Error('当前浏览器不支持localStorage')

export const getTodos = () => {
  let todos = []
  if (localStorage.getItem(TODOS)) {
    todos = JSON.parse(localStorage.getItem(TODOS))
  }

  return todos
}

export const addTodo = (text) => {
  let todos = getTodos()
  todos.push(Object.assign({}, {text: text}, {id: new Date().getTime(), done: false}))
  localStorage.setItem(TODOS, JSON.stringify(todos))
  return getTodos()
}

export const deleteTodo = (id) => {
  let todos = _.filter(getTodos(), (t) => {
    return t.id != id
  })
  localStorage.setItem(TODOS, JSON.stringify(todos))
  return getTodos()
}

export const toggleTodo = (id) => {
  let todos = getTodos();
  _.each(todos, (t) => {
    if (t.id == id) {
      t.done = !t.done
    }
  })

  localStorage.setItem(TODOS, JSON.stringify(todos))
  return _.find(getTodos(), (t) => {
    return t.id == id
  })
}
