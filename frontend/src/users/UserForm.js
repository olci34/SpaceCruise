import React, { Component } from "react";
import { connect } from "react-redux";
import addUser from "../actions/addUser";
import { withRouter } from "react-router-dom";
import signIn from '../actions/signIn'

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.serve === "Sign In") {
        debugger
      this.props.signIn(this.state.name)
    } else if (this.props.serve === "Sign Up") {
      this.props.addUser(this.state); // TODO: Authenticate User
      this.props.history.push("/trips"); // navigates us to /planets
    }
  };

  render() {
    return (
      <div className={`${this.props.serve}-div`}>
        <h1>{this.props.serve}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
          />
          <br />
          <label>Password:</label>
          <input type="text" onChange={this.handleChange} name="password" />
          <br />
          <input type="submit" value={this.props.serve} />
        </form>
      </div>
    );
  }
}

export default withRouter(connect(null, { signIn, addUser })(UserForm));
