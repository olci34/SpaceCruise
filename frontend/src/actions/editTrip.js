export default function editTrip(trip) {
  return (dispatch) => {
    configTrip = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({ trip: trip }),
    };
    fetch(`http://localhost:3001/trips/${trip.id}`, configTrip)
      .then((resp) => resp.json())
      .then((trip) => dispatch({ type: "EDIT_TRIP", payload: trip.id }));
  };
}
