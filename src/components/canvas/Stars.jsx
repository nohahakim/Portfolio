import { useState, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const numberOfPoints = 1666; // Adjust as needed
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(numberOfPoints * 3), { radius: 1.2 })
  );

  useEffect(() => {
    for (let i = 0; i < sphere.length; i++) {
      if (isNaN(sphere[i])) {
        console.error(`NaN detected at index ${i} in positions array`);
      }
    }
  }, [sphere]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default Stars;
