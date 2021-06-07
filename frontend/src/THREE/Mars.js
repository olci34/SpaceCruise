import React, { useRef } from "react";
import PlanetTemplate from "./PlanetTemplate";

function Mars() {
  const mesh = useRef();
  const frameCallback = () => {
    mesh.current.rotation.y += 0.005;
  };

  return (
    <PlanetTemplate
      mesh={mesh}
      frameCallback={frameCallback}
      maps={['https://i.postimg.cc/V6RXZXng/marsmap.png', 'https://i.postimg.cc/3RKvGWVv/marsnormalmap.png', 'https://i.postimg.cc/YSF3R4dD/marsdisplacement.png']}
      dScale={0.1}
      positions={[4, 0, 0]}
      sphereArgs={[0.3, 64, 64]}
    />
  );
}

export default Mars;
