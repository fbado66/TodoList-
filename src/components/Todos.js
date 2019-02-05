import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

export default class Todos extends Component {
  render() {
    return this.props.todos.map((todo) =>(
      <React.Fragment>
      <TodoItem key={todo.id} todo={todo}/>
      </React.Fragment>

    ));
  }
}
    
Todos.propTypes = {
  todos: PropTypes.array.isRequired 
}
