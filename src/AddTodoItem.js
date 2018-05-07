import React,{Component} from 'react';

class AddTodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {text:''};
    this.handleChange = this.handleChange.bind(this);
  }
   
  handleChange(e) {
    this.setState({text: e.target.value});
  }
   
  render() {
    const {text} = this.state;
    return (
      <div className='add-todo'>
        <input onChange={this.handleChange}/>
        <button 
          onClick={() => this.props.addTask(text)}>
          ADD TASK
        </button>
      </div>
    )
  }
}

export default AddTodoItem;