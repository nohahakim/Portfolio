import React from "react";
import { useGLTF } from "@react-three/drei";
import { exp } from "three/webgpu";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

export default Earth;
