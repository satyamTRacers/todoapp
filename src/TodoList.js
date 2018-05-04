import React,{Component} from 'react';

export default class TodoList extends Component {
    render () {
      var items = this.props.items.map((item, index) => {
        return (
          <li key={index}>
          <div>
        {item.completed?<span style={{textDecoration:'line-through'}}>{item.text}</span>:<span>{item.text}</span>}
        {
        !item.completed&&<button style={{marginLeft:'150px'}} onClick={()=>this.props.markComplete(item.index)}>Mark Complete</button>
        }
        {
        <button  style={{marginLeft:'100px'}} onClick={()=>this.props.deleteTask(item.index)}>Delete Task</button>
        }
        </div></li>
        );
      });
      return (
        <ul> {items} </ul>
      );
    }
  }
  