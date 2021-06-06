import React, { useRef } from "react";
import mercurynormalmap from "../textures/mercurynormal.png";
import mercurymap from "../textures/mercury.png";
import displacementmap from "../textures/mercurydisplacement.png";
import PlanetTemplate from "./PlanetTemplate";

function Mercury() {
  const mesh = useRef();
  const frameCallback = () => {
    mesh.current.rotation.y += 0.002;
  };

  return (
    <PlanetTemplate
      mesh={mesh}
      frameCallback={frameCallback}
      maps={[mercurymap, mercurynormalmap, displacementmap]}
      dScale={0.1}
      positions={[-4, 0, 0]}
      sphereArgs={[0.22, 64, 64]}
    />
  );
}

export default Mercury;
