import React, { Component } from 'react';
import Todos from './components/Todos'
import {todos} from './components/data'
import Game from './components/Game'

import './App.css';

export default class App extends Component {
  state = {
    todos: todos
  };
      
  render() {
    console.log(this.state.todos)
    return (
      <React.Fragment>
          <p>IM learning react.</p>
          {/* <Todos todos={this.state.todos} /> */}
          <Game game={this.state.game}/>
      </React.Fragment>
          
      
    );
  }
}


