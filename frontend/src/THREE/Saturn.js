import React, { useRef } from "react";
import map from "../textures/saturn.jpg";
import normalmap from "../textures/saturnnormal.png";
import displacementmap from "../textures/saturndisplacement.png";
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
      positions={[26, 0, 0]}
      sphereArgs={[3, 64, 64]}
    />
  );
}

export default Jupiter;
