import React, { useRef } from "react";
import map from "../textures/pluto.jpg";
import normalmap from "../textures/plutonormal.png";
import displacementmap from "../textures/plutodisplacement.png";
import PlanetTemplate from "./PlanetTemplate";

function Jupiter() {
  const mesh = useRef();
  const frameCallback = () => {
    mesh.current.rotation.y += 0.01;
  };

  return (
    <PlanetTemplate
      mesh={mesh}
      frameCallback={frameCallback}
      maps={[map, normalmap, displacementmap]}
      dScale={0.3}
      positions={[52, 0, 0]}
      sphereArgs={[0.1, 64, 64]}
    />
  );
}

export default Jupiter;
