import "./App.css";
import Greeting from "./Greeting";
import UserForm from "./UserForm";
import { Route, Switch } from "react-router-dom";
import Planets from "./Planets";

function App(props) {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Greeting />
          <UserForm />
        </Route>
        <Route exact path="/planets">
          <Planets />
        </Route>
      </Switch>
    </>
  );
}

export default App;