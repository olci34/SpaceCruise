import React, { useRef } from "react";
import marsnormalmap from "../textures/marsnormalmap.png";
import marsmap from "../textures/marsmap.png";
import displacementmap from "../textures/marsdisplacement.png";
import PlanetTemplate from "./PlanetTemplate";

function Mars() {
  const mesh = useRef();
  const frameCallback = () => {
    mesh.current.rotation.y += 0.005;
  };

  return (
    <PlanetTemplate
      mesh={mesh}
      frameCallback={frameCallback}
      maps={[marsmap, marsnormalmap, displacementmap]}
      dScale={0.1}
      positions={[4, 0, 0]}
      sphereArgs={[0.3, 64, 64]}
    />
  );
}

export default Mars;
