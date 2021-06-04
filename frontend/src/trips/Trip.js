import {Link} from 'react-router-dom'

export default function Trip(props) {

    return (
        <li>
            <Link to={`/trips/${props.trip.id}`}> Destination: {props.trip.planets[props.trip.planets.length -1].name} </Link>
        </li>
    )
}