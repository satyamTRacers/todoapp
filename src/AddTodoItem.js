import React,{Component} from 'react';

class AddTodoItem extends Component {

  constructor(props) {
    super(props);
    this.state = {text:''};
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
  }
   
  handleChange(e) {
    this.setState({text: e.target.value});
  }

  addTask(){
    const {text} = this.state;
    const task = {
      id:'_'+Math.random().toString(36).substr(2,9),
      completed:false,
      text
    };
    this.props.addTask(task);
  }

  render() {
    return (
      <div className = 'add-todo'>
        <input onChange = {this.handleChange}/>
        <button onClick = {this.addTask}>ADD TASK</button>
      </div>
    )
  }
}

export default AddTodoItem;