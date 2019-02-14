import React, { Component } from 'react';


export default class AddTodos extends Component {
  
  render() {
    return (
      <React.Fragment>
        <form >
          <input type='text' name='title' 
          placeholder='add todo ... ' />
          <input type='submit' value='submit ' className='addBtn'
          style={{flex: '1'}}
          />
        </form>
      </React.Fragment>

    );
  }
}
    

