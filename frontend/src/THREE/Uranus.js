import React, { useRef } from "react";
import map from "../textures/uranus.jpg";
import normalmap from "../textures/uranusnormal.png";
import displacementmap from "../textures/uranusdisplacement.png";
import PlanetTemplate from "./PlanetTemplate";

function Uranus() {
  const mesh = useRef();
  const frameCallback = () => {
    mesh.current.rotation.y += 0.017;
  };

  return (
    <PlanetTemplate
      mesh={mesh}
      frameCallback={frameCallback}
      maps={[map, normalmap, displacementmap]}
      dScale={0.1}
      positions={[35, 0, 0]}
      sphereArgs={[2.1, 64, 64]}
    />
  );
}

export default Uranus;
