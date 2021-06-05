import "./App.css";
import Greeting from "./Greeting";
import UserForm from "./users/UserForm";
import { Route, Switch } from "react-router-dom";
import TripsContainer from "./trips/TripsContainer";
import PlanetsContainer from "./planets/PlanetsContainer";
import Earth from "./THREE/Earth";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas>
        <OrbitControls />
        <Stars fade={true} />
        <spotLight position={[5, 5, 5]} color="#fdfbd3" />
        <ambientLight position={[-5, -3, 3]} />
        <Earth />
      </Canvas>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Greeting />
          </Route>
          <Route path="/signup">
            <UserForm serve="Sign Up" />
          </Route>
          <Route path="/trips">
            <TripsContainer />
          </Route>
          <Route path="/planets">
            <PlanetsContainer />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
