import React, { Component } from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

class CreateTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskname: "",
            priority: "",
            saved: false,
            created: "",
            body: "",
            user_id: 1,
            completed: false,
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleNewSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('taskname', this.state.taskname);
        data.append('priority', this.state.priority);
        data.append('body', this.state.body)
        data.append('user_id', this.state.user_id);

        ///for testing
        // console.log(data.json(), ' this is data')
        for (let pair of data.entries()) {
            console.log(pair[0], ', ', pair[1])
        }
        this.props.createTask(data);
        this.setState({
            newTask: {
                taskname: "",
                priority: "",
                saved: false,
                created: "",
                body: "",
                user_id: 1,
                completed: false,
            }
        })
        //clearstate
        // const newTaskCall = this.props.createTask(data);

        // newTaskCall.then((data) => { //This is only needed for a redirect after successfully submitting user 
        //     console.log(data)
        //     if (data.status.message === "Success") {
        //         console.log("succesful returned to container")
        //         //resetState
        //     } else {
        //         console.log(data, ' this should have an error message? How could you display that on the screen')
        //     }
        // })
    }
    render() {
        const formStyle = {
        paddingInlineStart: "40px",
        paddingInlineEnd: "40px"
        }
        return (
<form class="ui form" onSubmit={this.handleNewSubmit} style={formStyle}>
<h1>Add a Task</h1>
  <div class="equal width fields">
    <div class="field">
      <label for="form-subcomponent-shorthand-input-task-name"></label>
      <div className="ui fluid input">
        <input
          type="text"
          id="form-subcomponent-shorthand-input-task-name"
          placeholder='Task name'
          name='taskname' 
          value={this.state.taskname}  
          onChange={this.handleChange}
        />
      </div>
    </div>
    <div className="field">
      <label for="form-subcomponent-shorthand-input-priority"></label>
      <div class="ui fluid input">
        <input
          type="text"
          id="form-subcomponent-shorthand-input-priority"
          placeholder='Priority'
          name='priority' 
          value={this.state.priority}  
          onChange={this.handleChange}
        />
      </div>
    </div>
    <div class="field">
      <label for="form-subcomponent-shorthand-input-description"></label>
      <div className="ui fluid input">
        <input
          type="text"
          id="form-subcomponent-shorthand-input-description"
          placeholder="Description"
          name='body' 
          value={this.state.body} 
          placeholder="Description - 100 words or less" 
          onChange={this.handleChange}
        />
      </div>
    </div>
    <button className="ui button" type="submit">Add Task</button>
  </div>
</form>

        )
    };
}
export default CreateTask;




