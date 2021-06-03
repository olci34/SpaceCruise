import {connect} from 'react-redux'

function Trips(props) {

    return (
        <ul>
            {props.trips.map(t => <li><h2>{t.takeoff} - {t.destination}</h2></li>)}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        trips: [...state.trips]
    }
}
export default connect(mapStateToProps)(Trips)