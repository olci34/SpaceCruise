import React from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from '@react-three/drei'
function PlanetTemplate(props) {
  useFrame(props.frameCallback);
  const [map, normal, displacement] = useTexture(props.maps)
  
  return (
    <mesh ref={props.mesh} position={props.positions}>
      <sphereBufferGeometry attach="geometry" args={props.sphereArgs} />
      <meshStandardMaterial
        attach="material"
        color="white"
        normalMap={normal}
        map={map}
        displacementMap={displacement}
        displacementScale={props.dScale}
        roughness={0.3}
        metalness={0.8}
      />
    </mesh>
  );
}

export default PlanetTemplate;
