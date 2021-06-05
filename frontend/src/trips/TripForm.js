import React, { Component } from "react";
import postTrip from "../actions/postTrip";
import { connect } from "react-redux";
import fetchPlanets from "../actions/fetchPlanets";
import { withRouter } from "react-router";
import editTrip from "../actions/editTrip";

class TripForm extends Component {
  state = {
    departure: "",
    planets: [],
  };

  componentDidMount() {
    if (this.props.planets.length === 0) {
      this.props.fetchPlanets();
    } else {
      // No Need to fetch again if we stored before !
      this.setState({
        planets: this.props.planets.map((p) =>
          Object.assign({}, p, { checked: false })
        ),
      });
    }
  }

  componentDidUpdate(prevProps) {
    // STUDY WHY !!!
    if (prevProps.planets.length === 0) {
      this.setState({
        planets: this.props.planets.map((p) =>
          Object.assign({}, p, { checked: false })
        ),
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const visitingPlanetIds = this.state.planets
      .filter((p) => p.checked === true)
      .map((p) => p.id);
    if (this.props.trip === undefined) {
      this.props.postTrip({
        departure: e.target.children[0].value,
        user_id: this.props.user.id,
        planet_ids: visitingPlanetIds,
      });
      this.props.history.push("/trips");
    } else if (!!this.props.trip) {
      this.props.editTrip({
        ...this.props.trip,
        planet_ids: visitingPlanetIds,
        departure: e.target.children[0].value,
      });
      this.props.history.push(`/trips/${this.props.trip.id}`);
    }
  };

  handleChange = (e) => {
    let newPlanets = this.state.planets;
    newPlanets.map((p) =>
      p.name === e.target.name ? (p.checked = e.target.checked) : p
    );
    this.setState({ planets: newPlanets });
  };

  render() {
    return (
      <div className="trip-form">
        <form onSubmit={this.handleSubmit}>
          <input type="date" id="start" name="trip-start" />
          {this.state.planets.map((p) => (
            <label key={p.id}>
              {p.name}
              <input
                type="checkbox"
                onChange={this.handleChange}
                key={p.name}
                name={p.name}
                checked={p.checked}
              />
            </label>
          ))}
          <input type="submit" value="Let's Go!" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    planets: state.planets,
  };
};

export default withRouter(
  connect(mapStateToProps, { fetchPlanets, postTrip, editTrip })(TripForm)
);
