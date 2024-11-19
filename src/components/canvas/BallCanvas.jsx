import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";
import Ball from "./Ball";

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand" // Only render the scene when needed (when the camera moves)
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          // Prevent the camera from zooming in and out
          // when the user scrolls the page or pinches the screen on a touch device
          // Add the `OrbitControls` component to the scene
          // and disable the ability to zoom in and out
          // by setting the `enableZoom` prop to `false`
          // (the default value is `true`)
          // (the default value is `true`)
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload
        all
        // Preload all assets in the scene
        // (in this case, the texture image)
        // to prevent a delay when the user interacts with the scene
        // (in this case, the texture image)
      />
    </Canvas>
  );
};

export default BallCanvas;
