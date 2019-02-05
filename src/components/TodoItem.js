import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class TodoItem extends Component {
  render(){
    return (
      <React.Fragment>
        <p>{this.props.todo.title}</p>
      </React.Fragment>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}