export default function fetchTrips(dispatch) {
  return () => {
    fetch("http://localhost:3001/trips")
      .then((resp) => resp.json())
      .then((trips) => dispatch({ type: "FETCH_TRIPS", payload: trips }));
  };
}
