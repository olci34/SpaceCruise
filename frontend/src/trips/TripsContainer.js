import React, { Component } from "react";
import { connect } from "react-redux";
import fetchTrips from "../actions/fetchTrips";
import TripForm from "./TripForm";
import Trips from "./Trips";

class TripsContainer extends Component {
  componentDidMount() {
    this.props.fetchTrips();
  }

  render() {
    return (
      <>
        <Trips />
        <TripForm planets={[{name: 'earth'}, {name:'mars'}]} />
      </>
    );
  }
}

export default connect(null, { fetchTrips })(TripsContainer);
