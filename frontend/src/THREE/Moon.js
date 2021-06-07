import React, { useRef } from "react";
import PlanetTemplate from "./PlanetTemplate";

function Moon() {
  const mesh = useRef();
  let t = 0;
  const frameCallback = () => {
    t += 0.001;
    mesh.current.position.x = 0.8 * Math.sin(t);
    mesh.current.position.z = 0.8 * Math.cos(t);
  };

  return (
    <PlanetTemplate
      mesh={mesh}
      frameCallback={frameCallback}
      maps={['https://i.postimg.cc/QMcztnZM/moonmap.jpg', 'https://i.postimg.cc/SQgvJM3c/moonnormalmap.png', 'https://i.postimg.cc/X7h1g0VJ/moondisplacementmap.png']}
      dScale={0.02}
      positions={[0.4, 0, 0.3]}
      sphereArgs={[0.007, 64, 64]}
    />
  );
}

export default Moon;
