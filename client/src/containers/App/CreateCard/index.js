import React, {Component} from 'react';
import {postRequestHelper} from '../../../lib/modules';
console.log(postRequestHelper)

class CreateCardForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            priority: '',
            created_by: '',
            assigned_to: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        postRequestHelper({
            title: this.state.title,
            priorty: this.state.priority,
            created_by: this.state.created_by,
            assigned_to: this.state.assigned_to
        })
        .then(result => {
            this.props.grabAllCards();
        })
    }

    titleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    priorityChange = (event) => {
        this.setState({
            priority: event.target.value
        })
    }

    createdChange = (event) => {
        this.setState({
            created_by: event.target.value
        })
    }

    assignedChange = (event) => {
        this.setState({
            assigned_to: event.target.value
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="title" placeholder="Title..." onChange={this.titleChange}/>
                <input type="text" name="priority" placeholder="priority..." onChange={this.priorityChange}/>
                <input type="text" name="created_by" placeholder="created by..." onChange={this.createdChange}/>
                <input type="text" name="assigned_to" placeholder="assigned to..." onChange={this.assignedChange}/>
                <input type="submit" value="create"/>
            </form>
        )
    }
}

export default CreateCardForm;