import React, { Component } from "react";
import { connect } from "react-redux";
import addUser from "../actions/addUser";
import { withRouter } from "react-router-dom";
import signIn from "../actions/signIn";

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
      this.props.signIn(this.state);
    } else if (this.props.serve === "Sign Up") {
      this.props.addUser(this.state);
    }
    this.props.history.push("/trips"); // TODO: ACCESS STORE STATE, THEN CHECK IF ERRORS EMPTY, IF EMPTY PUSH TO '/trips', IF NOT ALERTS WITH ERRORS
  };

  render() {
    return (
      <div className="user-form">
        <h1>{this.props.serve}</h1>
        <form onSubmit={this.handleSubmit}>
          <br/>
          <label>Name:</label>
          <br/>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
          />
          <br/><br />
          <label>Password:</label>
          <br/>
          <input type="text" onChange={this.handleChange} name="password" />
          <br /><br/>
          <input type="submit" value={this.props.serve} />
        </form>
      </div>
    );
  }
}

export default withRouter(connect(null, { signIn, addUser })(UserForm));
