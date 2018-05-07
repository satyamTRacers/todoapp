import React, { Component } from 'react';

const TodoList=(props)=>{
  const items = props.items.map((item, index) =>(
    <li key={index} className='todo-item'>
      <div>
        {
          item.completed 
          ? <span style={{ textDecoration: 'line-through' }}>{item.text}</span> 
          : <span>{item.text}</span>
        }

        {
          !item.completed && <button className='mark-complete'
          onClick={() => props.markComplete(item.id)}>Mark Complete</button>
        }
        
        {
          <button className='delete-task'
          onClick={() => props.deleteTask(item.id)}>Delete Task</button>
        }
      </div>
    </li>
  ));
  return (<ul>{items}</ul>);
}

export default TodoList;