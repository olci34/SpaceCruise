import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useHistory, useParams } from "react-router-dom";
import cancelTrip from "../actions/cancelTrip";
import TripForm from "./TripForm";

export default function Trip() {
  const dispatch = useDispatch();
  const trips = useSelector((state) => state.trips); // WHEN /trips/:id PAGE IS REFRESHED, ERROR OCCURS
  const params = useParams();
  const history = useHistory();
  const trip = trips.find((t) => t.id === parseInt(params["id"], 10));
  const handleCancelTrip = (e) => {
    dispatch(cancelTrip(trip));
    history.push("/trips");
  };

  return (
    <Switch>
      <Route exact path="/trips/:id">
        <div className="trip">
          <h3> Planets: {trip.planets.map((p) => p.name).join(", ")} </h3>
          <h4> Departure Date: {trip.departure}</h4>
          <button id="delete-trip-button" onClick={handleCancelTrip}>
            Cancel Trip
          </button>
          <button
            id="edit-trip-button"
            onClick={() => history.push(`/trips/${trip.id}/edit`)}
          >
            Change Trip
          </button>
        </div>
      </Route>
      <Route exact path="/trips/:id/edit">
        <TripForm trip={trip} />
      </Route>
    </Switch>
  );
}
