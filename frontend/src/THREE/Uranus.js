import React, { useRef } from "react";
import PlanetTemplate from "./PlanetTemplate";

function Uranus() {
  const mesh = useRef();
  const frameCallback = () => {
    mesh.current.rotation.y += 0.017;
  };

  return (
    <PlanetTemplate
      mesh={mesh}
      frameCallback={frameCallback}
      maps={['https://i.postimg.cc/t4JZpLPh/uranus.jpg', 'https://i.postimg.cc/k43BNGHc/uranusnormal.png', 'https://i.postimg.cc/pdnmnzsr/uranusdisplacement.png']}
      dScale={0.1}
      positions={[35, 0, 0]}
      sphereArgs={[2.1, 64, 64]}
    />
  );
}

export default Uranus;
