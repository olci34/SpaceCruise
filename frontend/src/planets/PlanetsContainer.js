import { connect } from "react-redux";
import fetchPlanets from "../actions/fetchPlanets";
import React, { Component } from "react";
import Planets from "./Planets";

class PlanetsContainer extends Component {
  componentDidMount() {
    this.props.fetchPlanets();
  }

  render() {
    return (
      <>
        <Planets />
      </>
    );
  }
}

export default connect(null, { fetchPlanets })(PlanetsContainer);
