import React, { Component } from "react";
import { connect } from "react-redux";
import fetchTrips from "../actions/fetchTrips";
import TripForm from "./TripForm";
import Trips from "./Trips";
import fetchPlanets from '../actions/fetchPlanets'

class TripsContainer extends Component {
  componentDidMount() {
    this.props.fetchTrips();
    this.props.fetchPlanets()
  }

  render() {
    return (
      <>
        <Trips />
        <TripForm />
      </>
    );
  }
}

export default connect(null, { fetchTrips,fetchPlanets })(TripsContainer);
