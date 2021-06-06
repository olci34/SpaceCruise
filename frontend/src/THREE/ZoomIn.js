import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ZoomIn(props) {
  const vec = new THREE.Vector3(
    props.positions[0],
    props.positions[1],
    props.positions[2]
  );
  const vec3 = new THREE.Vector3(-0.2, 0, 1.2);
  const vec2 = new THREE.Vector3(
    props.positions[0],
    props.positions[1] + 3,
    props.positions[2] + 30
  );
  let t = 0;
  return useFrame(({ camera }) => {
    if (props.stage === "Intro") {
      camera.position.lerp(vec3, 0.01);
    } else {
      camera.rotation.y = (-9 * Math.PI) / 180;
      if (t < 10) {
        camera.position.lerp(vec2, 0.01);
        t += 0.2;
      } else {
        camera.position.lerp(vec, 0.01);
      }
    }
  });
}
