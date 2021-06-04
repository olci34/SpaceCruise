import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function Trip() {

  const trips = useSelector((state) => state.trips);
  const location = useLocation();
  const trip = trips.find(
    (t) => t.id === parseInt(location.pathname.split("/")[2], 10)
  );

  const handleCancelTrip = (e) => {
    
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
