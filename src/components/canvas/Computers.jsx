import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const ScreensModel = ({ isMobile }) => {
  const screens = useGLTF('./screens/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor="grey" />
      <pointLight intensity={6} />
      <primitive
        object={screens.scene}
        scale={isMobile ? 0.6 : 0.8}
        position={isMobile ? [0, -3, 0.1] : [0, -3.5, 0]}
        rotation={isMobile ? [0, 1.7, -0.03] : [0, 1.3, -0.03]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Listening to changes about screen sizing
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    // Setting the initial value of the isMobile state
    setIsMobile(mediaQuery.matches);
    // Handling changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    // Listening for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    // Removing the listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 30 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <ScreensModel isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
