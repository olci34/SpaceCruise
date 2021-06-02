import {Link} from 'react-router-dom'


export default function Greeting() {
    return (
        <div id='greeting'>
            <h1>Greeting</h1>
            <Link to='/planets'>Planets</Link>
        </div>
    )
}