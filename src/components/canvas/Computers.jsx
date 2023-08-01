import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = () => {
  const screens = useGLTF('./screens/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor='black' />
      <pointLight intensity={6} />
      <primitive 
      object={screens.scene}
      scale={0.8}
      position={[0, -3.5, 0]}
      rotation={[0, 1.3, 0]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas 
    frameloop='demand'
    shadows
    camera={{position: [20, 3, 5], fov: 30}}
    gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense /*fallback={<CanvasLoader />}*/>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas