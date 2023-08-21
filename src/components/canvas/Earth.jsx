import { Suspense, useRef, forwardRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');

  useFrame(() => {
    const [root] = earth.scene.children;
    root.rotation.z += 0.01;
    console.log(root.rotation.y);
  });

  // Forcing rotation on one axis only with position and rotation on Y axis
  return <primitive object={earth.scene} scale={2.5} position-y={0} />;
};

const EarthCanvas = () => {
  return (
    <Canvas shadows gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
