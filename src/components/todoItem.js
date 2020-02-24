import React from 'react';
import './styles/todoItem.css';

export default class TodoItem extends React.Component {
  removeTodo(id) {
    this.props.removeTodo(id);
  }

  completeTodo(id) {
    this.props.completeTodo(id);
  }

  render() {
    const { todo } = this.props

    return (
      <div className="todoWrapper">
        <button className="removeTodo" onClick={(e)=> this.removeTodo(todo.id) }>remove</button>
        <span className={todo.completed ? "todoText todoText--completed" : "todoText"}>{todo.title}</span>
        <input type="checkbox" checked={todo.completed} onChange={(e) => this.completeTodo(todo.id)}></input>
      </div>
    );
  }
}
