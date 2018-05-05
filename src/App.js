import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodoItem from './AddTodoItem';
import { getTasksApi, createTaskApi, deleteTaskApi, updateTaskStatusApi } from './api.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoItems: [] };
    getTasksApi((error, tasks) => {
      if (!error)
        this.setState({ todoItems: tasks });

    });
    this.addTask = this.addTask.bind(this);
    this.markComplete = this.markComplete.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  addTask(text) {
    createTaskApi(text, (error, response) => {
      if (!error) {
        getTasksApi((error, tasks) => {
          if (!error)
            this.setState({ todoItems: tasks });
        });
      }
    })
  }
  markComplete(id) {
    updateTaskStatusApi(id, (error, response) => {
      if (!error) {
        getTasksApi((error, tasks) => {
          if (!error)
            this.setState({ todoItems: tasks });
        });
      }
    })
  }
  deleteTask(id) {
    deleteTaskApi(id, (error, response) => {
      if (!error) {
        getTasksApi((error, tasks) => {
          if (!error)
            this.setState({ todoItems: tasks });
        });
      }
    });
  }
  render() {
    return (
      <div id="main">
        <h3>Managage Your Tasks</h3>
        <TodoList items={this.state.todoItems} markComplete={this.markComplete} deleteTask={this.deleteTask} />
        <AddTodoItem addTask={this.addTask} />
      </div>
    );
  }
}
export default App;
