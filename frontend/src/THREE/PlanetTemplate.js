import React from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

function PlanetTemplate(props) {
  useFrame(props.frameCallback);

  const textureLoader = new THREE.TextureLoader();
  const [map, normal, displacement] = props.maps.map((map) =>
    textureLoader.load(map)
  );
  
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
