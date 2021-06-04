import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import Trip from './Trip'


function Trips(props) {
    return (
        <div className='trips-list'>
            <ul>
                {props.trips.map(t => <Trip trip={t} key={t.id}/>)}
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