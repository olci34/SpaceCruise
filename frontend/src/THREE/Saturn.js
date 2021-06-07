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
      maps={['https://i.postimg.cc/yxh93cYc/saturn.jpg', 'https://i.postimg.cc/RC1nR14n/saturnnormal.png', 'https://i.postimg.cc/Cxr88FYP/saturndisplacement.png']}
      dScale={0.3}
      positions={[26, 0, 0]}
      sphereArgs={[3, 64, 64]}
    />
  );
}

export default Jupiter;
