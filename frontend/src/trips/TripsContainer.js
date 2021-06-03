import React, { Component } from "react";
import { connect } from "react-redux";
import fetchTrips from "../actions/fetchTrips";
import Trips from "./Trips";

class TripsContainer extends Component {
  componentDidMount() {
    this.props.fetchTrips();
  }

  render() {
    return (
      <>
        <Trips />
      </>
    );
  }
}

export default connect(null, { fetchTrips })(TripsContainer);
