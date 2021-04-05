import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateNote extends Component {

    state={
        users:[],
        userSelected: '',
        title: '',
        content: '',
        date: new Date()
    }

    async componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users')
        this.setState({ users: res.data.map(user => user.username) })
        this.setState({userSelected:res.data[0].username})
    }

    onSubmit = async e =>{
        e.preventDefault();
        const newNote = {
            title: this.state.title,
            content: this.state.content,
            date: this.state.date,
            author: this.state.userSelected
        };
       await axios.post('http://localhost:4000/api/notes', newNote)
       window.location.href = '/';
    }

    onImputChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onChangeDate = date =>{
        this.setState({
            date
        })
    }


    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Create a Note</h4>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <select className="form-control" 
                            name="userSelected"
                            value={this.state.userSelected}
                            onChange={this.onImputChange} 
                            >
                            {this.state.users.map(user => 
                                <option key={user}>
                                    {user}
                                </option>
                            )}
                            </select>
                        </div>

                        <div className="form-group">
                            <input type="text" 
                            className="form-control"
                            placeholder="Title" 
                            name="title"
                            required
                            value={this.state.title}
                            onChange={this.onImputChange}
                            />
                        </div>

                        <div className="form-group">
                            <textarea type="textarea"
                            className="form-control"
                            name="content"
                            placeholder="Content"
                            required
                            value={this.state.content}
                            onChange={this.onImputChange}
                            >
                            </textarea>
                        </div>

                        <div className="form-group">
                            <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
