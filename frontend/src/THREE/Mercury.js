import React, { useRef } from "react";
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
      maps={['https://i.postimg.cc/Y9nhmRQ5/mercury.png', 'https://i.postimg.cc/gj1jg0S4/mercurynormal.png', 'https://i.postimg.cc/d3hDRCBL/mercurydisplacement.png']}
      dScale={0.1}
      positions={[-4, 0, 0]}
      sphereArgs={[0.22, 64, 64]}
    />
  );
}

export default Mercury;
