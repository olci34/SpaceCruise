import React, { useRef } from "react";
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
      maps={['https://i.postimg.cc/L4QxHMgT/neptune.jpg', 'https://i.postimg.cc/mgY3FxkK/neptunenormal.png', 'https://i.postimg.cc/gj1y3mvb/neptunedisplacement.png']}
      dScale={0.1}
      positions={[43, 0, 0]}
      sphereArgs={[2.1, 64, 64]}
    />
  );
}

export default Neptune;
