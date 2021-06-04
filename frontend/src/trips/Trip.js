import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import cancelTrip from "../actions/cancelTrip";

export default function Trip() {


  const dispatch = useDispatch();
  const trips = useSelector((state) => state.trips); // WHEN /trips/:id PAGE IS REFRESHED, ERROR OCCURS
  const params = useParams()
  const history = useHistory();
  const trip = trips.find(
    (t) => t.id === parseInt(params["id"],10)
  );

  const handleCancelTrip = (e) => {
    dispatch(cancelTrip(trip))
    history.push('/trips')
  };

  return (
    <div className="trip">
      <h3> Planets: {trip.planets.map((p) => p.name).join(", ")} </h3>
      <h4> Departure Date: {trip.departure}</h4>
      <button id="delete-trip-button" onClick={handleCancelTrip}>
        Cancel Trip
      </button>
    </div>
  );
}
