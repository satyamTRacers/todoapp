import React from 'react';

const TodoItem=({item,key,markComplete,deleteTask})=>(
  <li key={key} className = 'todo-item'>
    <div>
      {
        item.completed 
        ? <span style = {{ textDecoration: 'line-through' }}>{item.text}</span> 
        : <span>{item.text}</span>
      }

      {
        !item.completed && <button className='mark-complete'
        onClick={() => markComplete(item.id)}>Mark Complete</button>
      }
      
      {
        <button className='delete-task'
        onClick={() => deleteTask(item.id)}>Delete Task</button>
      }
    </div>
  </li>
)

export default TodoItem;