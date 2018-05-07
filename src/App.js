import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import './styles/App.css';
import TodoList from './TodoList';
import AddTodoItem from './AddTodoItem';
import { getTasksApi, createTaskApi, deleteTaskApi, updateTaskStatusApi } from './api.js';
import ChatMessages from './ChatMessages';

const ENDPOINT_URL='http://localhost:3001';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todoItems: [],chatMessages:[],chatMessageText:''};
    this.socket=socketIOClient(ENDPOINT_URL);
    this.addTask = this.addTask.bind(this);
    this.markComplete = this.markComplete.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.sendMessage=this.sendMessage.bind(this);
    this.addMessageToList=this.addMessageToList.bind(this);
    this.handleChatMessageChange=this.handleChatMessageChange.bind(this);
  }

componentDidMount(){
  getTasksApi((error, tasks) => {
    if (!error) this.setState({ todoItems: tasks });
  });
  this.socket.on('receive message',(message)=>{
    console.log('method called');
    this.addMessageToList(message);
  });
}

addTask(text) {
  createTaskApi(text, (error, response) => {
    if (!error) {
      getTasksApi((error, tasks) => {
        if (!error) this.setState({ todoItems: tasks });
        });
      }
    })
}

markComplete(id) {
  updateTaskStatusApi(id, (error, response) => {
    if (!error) {
      getTasksApi((error, tasks) => {
        if (!error) this.setState({ todoItems: tasks });
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

sendMessage(){
  this.socket.emit('send message',this.state.chatMessageText);
}

addMessageToList(message){
  this.setState({chatMessages:[...this.state.chatMessages,message]});
}

handleChatMessageChange(e){
  this.setState({chatMessageText:e.target.value});
}

render() {
  const {chatMessages}=this.state;
  return (
    <div id="main">
      <div className="task">
        <h3 className='heading'>Managage Your Tasks</h3>
        <TodoList items={this.state.todoItems} 
          markComplete={this.markComplete} 
          deleteTask={this.deleteTask} 
        />
        <AddTodoItem addTask={this.addTask} />        
      </div>
      <div className="chat">
        <ChatMessages chatMessages={chatMessages}/>
        <textarea name="chatMessageText" className="chat-input" onChange={this.handleChatMessageChange} />
        <button onClick={this.sendMessage}>SEND</button>
      </div>
    </div>
    );
  }
}

export default App;
