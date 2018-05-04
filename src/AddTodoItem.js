import React,{Component} from 'react';

export default class AddTodoItem extends Component{
    state={
        text:''
    }
constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
}
    handleChange(e){
        e.preventDefault();
       this.setState({text:e.target.value});
       console.log(this.state.text);
    }
    render(){
        return(
            <div>
                <input name="itemText" onChange={this.handleChange}/>
                <button onClick={()=>this.props.addTask(this.state.text)}>ADD TASK</button>
            </div>
        )
    }
}