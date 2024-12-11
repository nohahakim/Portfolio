/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  Environment,
  useAnimations,
} from "@react-three/drei";
import CanvasLoader from "../Loader";
import * as THREE from "three";
import PropTypes from "prop-types";

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-[90%] h-full">
        <Canvas
          shadows={false}
          camera={{
            position: isMobile ? [0, 0, 8] : [0, 0, 9],
            fov: 50,
          }}
          gl={{
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.5,
          }}
          className="w-full h-full"
        >
          <Suspense fallback={<CanvasLoader />}>
            <Environment preset="sunset" />
            <OrbitingGroup isMobile={isMobile}>
              <Model autoplay animationName="animation1" isMobile={isMobile} />
            </OrbitingGroup>
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={true}
              autoRotate={false}
            />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

const OrbitingGroup = ({ children, isMobile }) => {
  const groupRef = useRef();
  const rotationSpeed = isMobile ? 0.002 : 0.005;

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed;
    }
  });

  const orbitRadius = isMobile ? 3 : 4;
  return (
    <group ref={groupRef}>
      <group position={[orbitRadius, 0, 0]}>{children}</group>
    </group>
  );
};

OrbitingGroup.propTypes = {
  children: PropTypes.node,
  isMobile: PropTypes.bool,
};

const Model = ({ autoplay, animationName, isMobile }) => {
  const group = useRef();
  const { scene, animations } = useGLTF("./models/laptop.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && animationName && actions[animationName]) {
      autoplay ? actions[animationName].play() : actions[animationName].stop();
    }
  }, [actions, animationName, autoplay]);

  const modelScale = isMobile ? 1 : 1.2;

  return (
    <primitive
      ref={group}
      object={scene}
      dispose={null}
      scale={modelScale}
      position={[0, -1, 0]}
    />
  );
};

Model.propTypes = {
  autoplay: PropTypes.bool,
  animationName: PropTypes.string,
  isMobile: PropTypes.bool,
};

useGLTF.preload("./models/laptop.glb");

export default ComputersCanvas;
