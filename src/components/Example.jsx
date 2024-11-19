import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Scene = () => (
  <Canvas>
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} />
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
    <OrbitControls />
  </Canvas>
);

export default Scene;
