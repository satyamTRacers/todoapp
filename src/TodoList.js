import React, { Component } from 'react';

const TodoList=(props)=>{
  const items = props.items.map((item, index) =>(
    <li key={index}>
      <div>
        {
          item.completed 
          ? <span style={{ textDecoration: 'line-through' }}>{item.text}</span> 
          : <span>{item.text}</span>
        }

        {
          !item.completed && <button style={{ marginLeft: '150px' }}
          onClick={() => this.props.markComplete(item.id)}>Mark Complete</button>
        }
        
        {
          <button style={{ marginLeft: '100px' }}
          onClick={() => this.props.deleteTask(item.id)}>Delete Task</button>
        }
      </div>
    </li>
  ));
  return (<ul>{items}</ul>);
}

export default TodoList;