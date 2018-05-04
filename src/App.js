import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodoItem from './AddTodoItem';

let todoItems=[
  {text:"wash cloth",completed:false,index:0},
  {text:"feed cat",completed:false,index:1},
  {text:"feed cat to dog",completed:true,index:2}
];
let globalIndex=3;
class App extends React.Component {
  constructor (props) {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.markComplete=this.markComplete.bind(this);
    this.deleteTask=this.deleteTask.bind(this);
  }
  addTask(text) {
   todoItems.push({
     text,
     completed:false,
     index:globalIndex++
   });
    this.setState({todoItems: todoItems});
  }
  markComplete(index){
for(let i=0;i<todoItems.length;i++){
  if(todoItems[i].index==index){
    todoItems[i].completed=true;
  }
}
    this.setState({todoItems:todoItems});
  }
  deleteTask(index){
    for(let i=0;i<todoItems.length;i++){
      if(todoItems[i].index==index){
        todoItems.splice(i,1);
      }
    }
    this.setState({todoItems:todoItems});
  }
  render() {
    return (
      <div id="main">
        <h3>Managage Your Tasks</h3>
        <TodoList items={todoItems} markComplete={this.markComplete} deleteTask={this.deleteTask}/>
        <AddTodoItem addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
