import React, {Component} from 'react'
import {connect} from 'react-redux'
import addUser from './actions/addUser'
import {withRouter} from 'react-router-dom'

class UserForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addUser(this.state)
        this.props.history.push('/planets') // navigates us to /planets
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input type='text' onChange={this.handleChange} value={this.state.name} name='name'/>
                <br/>
                <label>Password:</label>
                <input type='text' name='password'/>
                <br/>
                <input type='submit' value='Sign Up'/>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => dispatch(addUser(user))
    }
}
export default withRouter(connect(null,mapDispatchToProps)(UserForm))