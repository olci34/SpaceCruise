import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function NavBar() {
  const dispatch = useDispatch();

  const handleLogOut = (e) => {
    dispatch({
      type: "LOG_OUT",
      payload: {
        cameraPosition: [0,0,2],
        errors: [],
        user: { name: "", password: "" },
        planets: [],
        trips: [],
      },
    });
  };

  return (
    <div id="navbar">
      <Link to="/planets">Planets</Link>
      <Link to="/trips">Trips</Link>
      <Link to="/" onClick={handleLogOut}>
        Log Out
      </Link>
    </div>
  );
}
