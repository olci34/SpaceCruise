import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
class TripForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("post trip");
  };

  handleChange = (e) => {
    debugger;
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <div key={`default-checkbox`} className="mb-3">
            {this.props.planets.map((p,i) => { return (
          <Form.Check
            key={i}
            onChange={this.handleChange}
            type="checkbox"
            id={p.name}
            label={p.name}
          />
            )})}
        </div>
        <Button type="submit">Let's Go!</Button>
      </Form>
    );
  }
}

export default TripForm;
