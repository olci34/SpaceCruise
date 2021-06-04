import React, { Component } from "react";
import { connect } from "react-redux";
import fetchTrips from "../actions/fetchTrips";
import TripForm from "./TripForm";
import Trips from "./Trips";
import {Route, Switch} from 'react-router-dom'
import Trip from './Trip'

class TripsContainer extends Component {

  componentDidMount() {
    this.props.fetchTrips();
  }

  render() {
    return (
      <>
        <Switch>
          <Route path='/trips/new'> {/*  /trips/new path has to be above /trips/:id otherwise it takes us to /trips/:id always */}
            <TripForm />
          </Route>
          <Route exact path='/trips'>
            <Trips />
          </Route>
          <Route path='/trips/:id'>
            <Trip />
          </Route>
        </Switch>
      </>
    );
  }
}

export default connect(null, {fetchTrips})(TripsContainer);
