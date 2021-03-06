import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

import TodoList from './components/Todo/TodoList';
import AddTodoItem from './components/Todo/AddTodoItem';
import ChatMessages from './components/Chat/ChatMessages';

import { getTasksApi, createTaskApi, deleteTaskApi, updateTaskStatusApi } from './api.js';
import './styles/App.css';

const ENDPOINT_URL='http://localhost:3001';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [],
      chatMessages:[],
      chatMessageText:''
    };
    
    this.socket = socketIOClient(ENDPOINT_URL);

    this.addTask = this.addTask.bind(this);
    this.markComplete = this.markComplete.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.addMessageToList = this.addMessageToList.bind(this);
    this.handleChatMessageChange = this.handleChatMessageChange.bind(this);
  }

  componentDidMount(){
    getTasksApi((error, tasks) => {
      if (!error) this.setState({ todoItems: tasks });
    });
    this.socket.on('receive message',(message)=>{
      this.addMessageToList(message);
    });
  }

  addTask(task) {
    createTaskApi(task, (error, response) => {
      if (!error) {
        this.setState(prevState=>({
          todoItems:[...prevState.todoItems,task]
        }));
      }
    })
  }

  markComplete(id) {
    updateTaskStatusApi(id, (error, response) => {
      if (!error) {
        let {todoItems} = this.state;
        todoItems.forEach(item => {
          if(item.id === id) item.completed=true;
        });
        this.setState({todoItems});
      }
    })
  }

  deleteTask(id) {
    deleteTaskApi(id, (error, response) => {
      if (!error) {
        let {todoItems} = this.state;
        let filteredTodoItems = todoItems.filter(item => item.id !== id);
        this.setState({todoItems:filteredTodoItems});
        }
      });
  }

  sendMessage() {
    this.socket.emit('send message',this.state.chatMessageText);
    this.setState({chatMessageText:''});
  }

  addMessageToList(message) {
    this.setState({chatMessages:[...this.state.chatMessages,message]});
  }

  handleChatMessageChange(e) {
    this.setState({chatMessageText:e.target.value});
  }

  render() {
    const {chatMessages,chatMessageText} = this.state;
    return (
      <div id = "main">
        <div className = "task">
          <h3 className = 'heading'>Managage Your Tasks</h3>
          <TodoList items = {this.state.todoItems} 
            markComplete = {this.markComplete} 
            deleteTask = {this.deleteTask} 
          />
          <AddTodoItem addTask = {this.addTask} />        
        </div>
        <div className = "chat">
          <ChatMessages chatMessages = {chatMessages}/>
          <textarea name = "chatMessageText" className = "chat-input" value = {chatMessageText} 
          onChange = {this.handleChatMessageChange} placeholder = 'Type your message here'
          />
          <button onClick = {this.sendMessage}>SEND</button>
        </div>
      </div>
    );
  }
}

export default App;
