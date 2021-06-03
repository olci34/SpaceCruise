import React, { Component } from "react";
import postTrip from '../actions/postTrip'
import { connect } from "react-redux";

class TripForm extends Component {

  state = {
    planets: [],
  };

  componentDidUpdate(prevProps) {
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
    const visitingPlanetIds = this.state.planets.filter(p => p.checked === true).map(p => p.id)
    this.props.postTrip({departure: '10 Jan 2023', user_id: 1, planet_ids: visitingPlanetIds})
    const unchecked = this.state.planets
    unchecked.map(p => p.checked = false)
    this.setState({planets: unchecked})
  };

  handleChange = (e) => {
    let newPlanets = this.state.planets;
    newPlanets.map((p) =>
      p.name === e.target.name ? (p.checked = e.target.checked) : p
    );
    this.setState({planets: newPlanets });
  };

  render() {
    console.log('render')
    return (
      <form onSubmit={this.handleSubmit}>
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    planets: state.planets,
  };
};

export default connect(mapStateToProps, {postTrip})(TripForm);
