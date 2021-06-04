import React, {Component} from 'react'
import {connect} from 'react-redux'
import addUser from '../actions/addUser'
import {withRouter} from 'react-router-dom'

class UserForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addUser(this.state) // TODO: Authenticate User
        this.props.history.push('/trips') // navigates us to /planets
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input type='text' onChange={this.handleChange} value={this.state.name} name='name'/>
                <br/>
                <label>Password:</label>
                <input type='text'onChange={this.handleChange} name='password'/>
                <br/>
                <input type='submit' value='Sign Up'/>
            </form>
        )
    }
}

export default withRouter(connect(null,{addUser})(UserForm))