import "./App.css";
import Greeting from "./Greeting";
import UserForm from "./users/UserForm";
import { Link, Route, Switch } from "react-router-dom";
import TripsContainer from "./trips/TripsContainer";
import PlanetsContainer from "./planets/PlanetsContainer"

function App(props) {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Greeting />
          <UserForm serve='Sign In'/>
          <Link to='/signup'>Sign Up</Link>
        </Route>
        <Route path="/signup">
          <UserForm serve='Sign Up'/>
        </Route>
        <Route path="/trips">
          <TripsContainer />
        </Route>
        <Route path="/planets">
          <PlanetsContainer />
        </Route>
      </Switch>
    </>
  );
}

export default App;