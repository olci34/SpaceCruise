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
      maps={['https://i.postimg.cc/3xvJx7SQ/jupiter.jpg', 'https://i.postimg.cc/P5xVW5G0/jupiternormal.png', 'https://i.postimg.cc/vH80yZmD/jupiterdisplacement.png']}
      dScale={0.1}
      positions={[13, 0, 0]}
      sphereArgs={[5.5, 64, 64]}
    />
  );
}

export default Jupiter;
