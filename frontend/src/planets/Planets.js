import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Planets extends Component {
  render() {
    return (
      <ul className="planets-list">
        {this.props.planets.map((p) => (
          <li key={p.id}>
            <Link to={`/planets/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return { planets: [...state.planets] };
};

export default connect(mapStateToProps)(Planets);
