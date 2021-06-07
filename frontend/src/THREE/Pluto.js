import React, { useRef } from "react";
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
      maps={['https://i.postimg.cc/qq6yJSWb/pluto.jpg', 'https://i.postimg.cc/tChDFnmr/plutonormal.png', 'https://i.postimg.cc/7hz9s5PZ/plutodisplacement.png']}
      dScale={0.1}
      positions={[52, 0, 0]}
      sphereArgs={[0.3, 64, 64]}
    />
  );
}

export default Jupiter;
