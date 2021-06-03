import React, {Component} from 'react'
import {connect} from 'react-redux'

class Planets extends Component {

    render() {
        return (
            <ul>
                {this.props.planets.map(p => <li>{p.name}</li>)}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {planets: [...state.planets]}
}

export default connect(mapStateToProps)(Planets)