import React, { useRef } from "react";
import earthnormalmap from "../textures/earthnormalmap.png";
import earthdaymap from "../textures/earthdaymap.jpg";
import displacementmap from "../textures/displacementmap.png";
import PlanetTemplate from "./PlanetTemplate";

function Earth() {
  const mesh = useRef();
  const frameCallback = () => {
    mesh.current.rotation.y += 0.005;
  };

  return (
    <PlanetTemplate
      mesh={mesh}
      frameCallback={frameCallback}
      maps={[earthdaymap, earthnormalmap, displacementmap]}
      dScale={0.1}
      positions={[0, 0, 0]}
      sphereArgs={[0.5, 64, 64]}
    />
  );
}

export default Earth;
