import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import TodoInput from './components/todoInput';
import TodoItem from './components/todoItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 0, title: "Make dinner tonight!", completed: false},
        {id: 1, title: "Fold the laundry.", completed: false},
        {id: 2, title: "Learn to make a React app!", completed: true}
      ],
      nextId: 21
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
      .then(rsp => rsp.json())
      .then(todos => {
        // this.setState({ todos: todos })
      })
  }

  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, title: todoText, completed: false});
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  removeTodo(id) {
    this.setState({
        todos: this.state.todos.filter((todo, index) => todo.id !== id)
      });
  }

  completeTodo(id) {
    let currentTodo = this.state.todos.find(todo => todo.id === id)
    currentTodo.completed = !currentTodo.completed

    this.setState({
      ...this.state.todos,
      currentTodo
    });
  }

  render() {
    const { todos } = this.state

    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo} />
          <ul>
            {
              todos && todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} completeTodo={this.completeTodo}/>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;