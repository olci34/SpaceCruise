import React, { useRef } from "react";
import map from "../textures/neptune.jpg";
import normalmap from "../textures/neptunenormal.png";
import displacementmap from "../textures/neptunedisplacement.png";
import PlanetTemplate from "./PlanetTemplate";

function Neptune() {
  const mesh = useRef();
  const frameCallback = () => {
    mesh.current.rotation.y += 0.015;
  };

  return (
    <PlanetTemplate
      mesh={mesh}
      frameCallback={frameCallback}
      maps={[map, normalmap, displacementmap]}
      dScale={0.1}
      positions={[43, 0, 0]}
      sphereArgs={[2.1, 64, 64]}
    />
  );
}

export default Neptune;
