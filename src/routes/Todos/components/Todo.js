import React, { Component } from 'react'
import { deleteTodo, toggleTodo } from '../modules/todos'

type Props = {
  id: number,
  text: string,
  done: boolean
}

class Todo extends Component {
  constructor(props:Props) {
    super(props)
    this.state = {
      id: props.id,
      text: props.text,
      done: props.done
    }
  }

  onToggle(e) {
    this.setState(toggleTodo(this.state.id))
  }

  render() {
    let text = this.state.text
    let ion = this.state.done ?
       'ion ion-ios-checkmark' : 'ion ion-ios-circle-outline'

    let todoText = Object.assign({}, {
      lineHeight: '56px', display: 'block', float: 'left', marginLeft: '20px'
    }, this.state.done ? styles.done : styles.undone)

    return (
      <div style={styles.todo}>
        <i className={ion}
           onClick={this.onToggle.bind(this)} style={{ color: '#ff3e3e', fontSize: '56px', float: 'left' }}></i>
        <span style={todoText}>{text}</span>
      </div>
    )
  }
}

const styles = {
  todo: {
    padding: '20px 20px 20px 0',
    height: '100px'
  },

  undone: {
    color: '#484746',
  },

  done: {
    textDecoration: 'line-through',
    color: '#AAA'
  }
}

export default Todo
