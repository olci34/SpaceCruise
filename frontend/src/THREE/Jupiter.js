import React, { useRef } from "react";
import map from "../textures/jupiter.jpg";
import normalmap from "../textures/jupiternormal.png";
import displacementmap from "../textures/jupiterdisplacement.png";
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
      dScale={0.1}
      positions={[13, 0, 0]}
      sphereArgs={[5.5, 64, 64]}
    />
  );
}

export default Jupiter;
