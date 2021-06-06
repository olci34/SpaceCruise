import React, { useRef } from "react";
import venusmap from "../textures/venus.jpg";
import venusnormalmap from "../textures/venusnormal.png";
import displacementmap from "../textures/venusdisplacement.png";
import PlanetTemplate from "./PlanetTemplate";

function Venus() {
  const mesh = useRef();
  const frameCallback = () => {
    mesh.current.rotation.y += 0.0005;
  };

  return (
    <PlanetTemplate
      mesh={mesh}
      frameCallback={frameCallback}
      maps={[venusmap, venusnormalmap, displacementmap]}
      dScale={0.05}
      positions={[-2, 0, 0]}
      sphereArgs={[0.47, 64, 64]}
    />
  );
}

export default Venus;
