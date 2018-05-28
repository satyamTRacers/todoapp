import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({items,...props}) => {
  return (
    <ul>
      { items.map((item,index) => <TodoItem item={item} key={index} {...props} />) }
    </ul>
  );
}

export default TodoList;