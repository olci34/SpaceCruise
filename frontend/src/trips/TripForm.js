import React, { Component } from "react";
import { connect } from "react-redux";
class TripForm extends Component {

    state = {
        earth: false,
        mars: false
    }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = (e) => {
      this.setState(prevState => ({...prevState, [e.target.name]: !prevState[e.target.name]}))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          {Object.keys(this.state).map(key => (
              <label key={key}>
                  {key}
                <input
                  type='checkbox'
                  onChange={this.handleChange}
                  key={key}
                  name={key}
                  checked={this.state[key]}/>
            </label>
          ))}
          <input type='submit' value="Let's Go!" />
      </form>
    );
  }
}

export default TripForm;
