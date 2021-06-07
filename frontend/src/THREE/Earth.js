import React, { useRef } from "react";
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
      maps={['https://live.staticflickr.com/2521/3884071286_edb50f8137_b.jpg', 'https://i.postimg.cc/yxk3fcvM/earthnormalmap.png', 'https://i.postimg.cc/j27kJ8G2/displacementmap.png']}
      dScale={0.1}
      positions={[0, 0, 0]}
      sphereArgs={[0.5, 64, 64]}
    />
  );
}

export default Earth;
