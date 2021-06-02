import React, {Component} from 'react'

class UserForm extends Component {

    state = {
        name: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    

    render() {
        return (
            <form >
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
export default UserForm