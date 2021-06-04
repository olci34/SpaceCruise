import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import Trip from './Trip'


function Trips(props) {
    return (
        <div className='trips-list'>
            <ul>
                {props.trips.map(t => <li key={t.id}><Link to={`/trips/${t.id}`}>Destionation: {t.planets[t.planets.length -1].name}</Link></li>)}
            </ul>
            <button id='new-trip-button' onClick={() => props.history.push('/trips/new')}>New Trip</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        trips: [...state.trips]
    }
}
export default withRouter(connect(mapStateToProps)(Trips))