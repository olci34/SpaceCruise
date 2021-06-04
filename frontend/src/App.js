import "./App.css";
import Greeting from "./Greeting";
import UserForm from "./users/UserForm";
import { Route, Switch } from "react-router-dom";
import TripsContainer from "./trips/TripsContainer";

function App(props) {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Greeting />
          <UserForm />
        </Route>
        <Route path="/trips">
          <TripsContainer />
        </Route>
      </Switch>
    </>
  );
}

export default App;