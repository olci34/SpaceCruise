import React, { Component } from "react";
import { connect } from "react-redux";
import fetchTrips from "../actions/fetchTrips";
import TripForm from "./TripForm";
import Trips from "./Trips";
import {Route, Switch} from 'react-router-dom'

class TripsContainer extends Component {

  componentDidMount() {
    this.props.fetchTrips();
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path='/trips'>
            <Trips />
          </Route>
          <Route path='/trips/new'>
            <TripForm />
          </Route>
        </Switch>
      </>
    );
  }
}

export default connect(null, {fetchTrips})(TripsContainer);
