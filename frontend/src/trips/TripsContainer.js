import React, {Component} from 'react'
import {connect} from 'react-redux'
import  fetchTrips from '../actions/fetchTrips'

class TripsContainer extends Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <h1>Trips</h1>
        )
    }
}

export default connect(null, {fetchTrips})(TripsContainer)