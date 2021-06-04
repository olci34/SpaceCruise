import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <>
            <Link to='/planets'>Planets</Link>
            <Link to='/trips'>Trips</Link>
            <Link to='/logout'>Log Out</Link>
        </>
    )
}