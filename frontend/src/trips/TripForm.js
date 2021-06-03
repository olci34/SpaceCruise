import React, { Component } from "react";
import { connect } from "react-redux";

class TripForm extends Component {
 
        state = {
            planets: []
        }
    componentDidUpdate(prevProps) {
        console.log('didupdate')
        if(prevProps.planets.length === 0) {
            this.setState({planets: this.props.planets.map(p => Object.assign({},p,{checked: false}))})
        }
    }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.planets);
  };

  handleChange = (e) => {
      let newPlanets = this.state.planets
      newPlanets.map(p => p.name === e.target.name ? p.checked = e.target.checked : p)
      this.setState({planets: newPlanets})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          {this.state.planets.map(p => (
              <label key={p.id}>
                  {p.name}
                <input
                  type='checkbox'
                  onChange={this.handleChange}
                  key={p.name}
                  name={p.name}
                  checked={p.checked}/>
            </label>
          ))}
          <input type='submit' value="Let's Go!" />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        planets: state.planets
    }
}

export default connect(mapStateToProps)(TripForm);
