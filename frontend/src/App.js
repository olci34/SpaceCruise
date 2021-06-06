import "./App.css";
import Greeting from "./Greeting";
import UserForm from "./users/UserForm";
import { Route, Switch } from "react-router-dom";
import TripsContainer from "./trips/TripsContainer";
import PlanetsContainer from "./planets/PlanetsContainer";
import Earth from "./THREE/Earth";
import { Canvas, useFrame } from "@react-three/fiber";
import { Loader, OrbitControls, Stars } from "@react-three/drei";
import Moon from "./THREE/Moon";
import { Suspense } from "react";
import Mars from "./THREE/Mars";
import Venus from "./THREE/Venus";
import * as THREE from "three";
import Mercury from "./THREE/Mercury";
import Jupiter from "./THREE/Jupiter";
import Saturn from "./THREE/Saturn";
import Uranus from "./THREE/Uranus";
import Neptune from "./THREE/Neptune";
import Pluto from "./THREE/Pluto";
import { useSelector } from "react-redux";


function ZoomIn(props) {

  const vec = new THREE.Vector3(props.positions[0], props.positions[1], props.positions[2])
  let t = 0
  const vec2 = new THREE.Vector3(props.positions[0], props.positions[1]+3, props.positions[2]+30)
  return useFrame(({ camera }) => {
    camera.rotation.y = -9 * Math.PI / 180
    if (t < 10) {
      camera.position.lerp(vec2, 0.03)
       t+=0.1
    } else {
      camera.position.lerp(vec, 0.01)
    }
    })
}
function App() {
  const positions = useSelector(state => state.zoomInPositions)
  return (
    <>
      <Canvas camera={{ position: [160, 10, -160] }}>
        <OrbitControls />
        <Stars fade={true} />
        <pointLight position={[-6, 3, 0]} color="#fdfbd3" intensity={6} />
        <ambientLight
          position={[50, -15, -15]}
          color="#fdfbd3"
          intensity={0.1}
        />
        <Suspense fallback={null}>
          <Earth />
          <Moon />
          <Mars />
          <Venus />
          <Mercury />
          <Jupiter />
          <Saturn />
          <Uranus />
          <Neptune />
          <Pluto />
        </Suspense>
        <ZoomIn positions={positions}/>
      </Canvas>
      <Loader />
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
