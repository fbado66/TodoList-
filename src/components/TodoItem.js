import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class TodoItem extends Component {
  getStyle = () => {
    // if(this.props.todo.completed){
    //   return {
    //     textDecoration: 'line-through',
    //     color: 'gray'
    //   }
    // } else {
    //   return {
    //     textDecoration: 'none'
    //   }
    // }
    return {
      textDecoration: this.props.todo.completed ?
      'line-through' : 'none',
      padding: '10px',
      borderBottom: '1px green dotted',
      textAlign: 'center'
    }
  }
  render(){
    const { id, title} = this.props.todo;
    return (
      <React.Fragment>
        <div style={this.getStyle()}>
          <p>
          {/* {this.props.todo.title} {'  '} */}
          {title} {'  '}

          {/* <input type='checkbox' onChange={this.props.markComplete.bind(this, this.props.todo.id)} />  */}
          <input type='checkbox' onChange={this.props.markComplete.bind(this, id)} /> 

          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>

          </p>
        </div>
      </React.Fragment>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: 'red',
  color: 'white',
  padding: '5px 10px',
  cursor: 'pointer',
  float: 'right',
  border: 'none',
  borderRadius: '50%'
}