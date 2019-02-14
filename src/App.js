import React, { Component } from 'react';
import Todos from './components/Todos'
import {todos} from './components/data'
import Game from './components/Game'
import Practice from './components/Practice'
import AddTodos from './components/AddTodos'

import './App.css';

export default class App extends Component {
  state = {
    todos: todos
  };
   
  markComplete =(id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })
  })
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  render() {
    return (
      <React.Fragment>
        {/* <Practice /> */}
          <p>IM learning react.</p>
          <AddTodos />
          <Todos todos = {this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
          <Game game={this.state.game}/>
          
      </React.Fragment>

      
    );
  }
}


