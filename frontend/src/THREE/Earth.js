import React, { useRef } from "react";
import earthnormalmap from "../textures/earthnormalmap.png";
import earthdaymap from "../textures/earthdaymap.jpg";
import displacementmap from "../textures/displacementmap.png";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

function Earth() {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });
  const textureLoader = new THREE.TextureLoader();
  const normalMap = textureLoader.load(earthnormalmap);
  const map = textureLoader.load(earthdaymap);
  const displacement = textureLoader.load(displacementmap);

  return (
    <mesh ref={mesh} position={[0, 0, -7]}>
      <sphereGeometry attach="geometry" args={[5, 64, 64]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        normalMap={normalMap}
        map={map}
        displacementMap={displacement}
        displacementScale={0.7}
        roughness={0.3}
        metalness={0.8}
      />
    </mesh>
  );
}

export default Earth;
