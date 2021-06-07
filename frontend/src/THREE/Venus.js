import React, { useRef } from "react";
import PlanetTemplate from "./PlanetTemplate";

function Venus() {
  const mesh = useRef();
  const frameCallback = () => {
    mesh.current.rotation.y += 0.0005;
  };

  return (
    <PlanetTemplate
      mesh={mesh}
      frameCallback={frameCallback}
      maps={['https://i.postimg.cc/VsFdMYWq/venus.jpg', 'https://i.postimg.cc/YSgSSkSm/venusnormal.png', 'https://i.postimg.cc/jSD5Gy0c/venusdisplacement.png']}
      dScale={0.05}
      positions={[-2, 0, 0]}
      sphereArgs={[0.47, 64, 64]}
    />
  );
}

export default Venus;
