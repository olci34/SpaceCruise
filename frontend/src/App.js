import "./App.css";
import Greeting from "./Greeting";
import UserForm from "./users/UserForm";
import { Route, Switch } from "react-router-dom";
import PlanetsContainer from "./planets/PlanetsContainer";

function App(props) {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Greeting />
          <UserForm />
        </Route>
        <Route exact path="/planets">
          <PlanetsContainer />
        </Route>
      </Switch>
    </>
  );
}

export default App;