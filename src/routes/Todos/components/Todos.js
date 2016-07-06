import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Page from '../../../layouts/Page'
import { getTodos, addTodo, deleteTodo } from '../modules/todos'
import Todo from './Todo'

const ENTER_KEY = 13

// ----------------------------------------
// Nav Items
// ----------------------------------------
const navItemLeft = <button className={'btn btn-clear btn-icon'}>
  <i className={'ion ion-ios-arrow-left'}></i>
</button>

// ----------------------------------------
// Nav Item Handlers
// ----------------------------------------
const onNavItemLeftClick = () => {
  browserHistory.goBack()
}

const TodoWrapper = ({ id, text, done, onDelete }) => (
  <div style={{ position: 'relative' }}>
    <Todo key={id} id={id} text={text} done={done} />
    <button className={'btn btn-danger'}
            style={{ position: 'absolute', right: '10px', top: '17px' }}
            onClick={onDelete}>删除</button>
  </div>
)

class Todos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: getTodos()
    }
  }

  add(e) {
    if (e.keyCode == ENTER_KEY) {
      let input = document.getElementById('input-add-todo')
      if (input.value == '') return
      this.setState({todos: addTodo(input.value)})
      input.value = ''
      input.blur()
    }
  }

  render() {
    let doms = []

    for (let t of this.state.todos) {
      doms.push(<TodoWrapper key={t.id} id={t.id} text={t.text} done={t.done} onDelete={() => {
        this.setState({todos: deleteTodo(t.id)})
      }} />)
    }

    if (doms.length == 0) doms = <h3>No Todos</h3>

    const content = <div className={'page-content padding-horizontal'}>
      <div>
        {doms}
      </div>
      <div style={{ width: '100%', height: '1px', backgroundColor: '#DDD', marginBottom: '20px'}}></div>
      <input id='input-add-todo' onKeyDown={this.add.bind(this)} placeholder='Add a Todo' style={{ padding: '20px', width: '100%' }} />
    </div>

    return (
      <Page title={'Todos'}
            navItemLeft={navItemLeft}
            onNavItemLeftClick={onNavItemLeftClick}
            content={content}/>
    )
  }
}

export default Todos
