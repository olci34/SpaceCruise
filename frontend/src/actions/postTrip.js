export default function postTrip(trip) {
    return (dispatch) => {
        const configTrip = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({trip: {destination: 'Mars', takeoff: 'Earth', arrival: 'ocak 4', departure: 'december 2', user_id:1}})
        }
        fetch('http://localhost:3001/trips', configTrip)
            .then(resp => resp.json())
            .then(trip => {debugger})
    }
}