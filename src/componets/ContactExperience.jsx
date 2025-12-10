import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Html } from '@react-three/drei'

// Small GLTF wrapper that attempts to load a model at /models/computer.glb
function ModelOrFallback(props) {
  let model = null
  try {
    model = useGLTF('/models/computer.glb')
  } catch (e) {
    // if file missing, use fallback
    model = null
  }

  if (model && model.scene) {
    return <primitive object={model.scene} {...props} />
  }

  // fallback simple mesh so something is visible immediately
  return (
    <mesh {...props} scale={[1.2, 1.2, 1.2]}>
      <boxGeometry args={[1.6, 1, 0.4]} />
      <meshStandardMaterial color="#6b21a8" metalness={0.6} roughness={0.3} />
    </mesh>
  )
}

const ContactExperience = () => {
  return (
    <div className="w-full h-full min-h-[320px] rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0.8, 3], fov: 45 }}>
        {/* Basic lights to ensure model visibility */}
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.6} position={[5, 5, 5]} />
        <pointLight intensity={0.4} position={[-5, -5, -5]} />

        <Suspense fallback={<Html center>Loading...</Html>}>
          <group position={[0, -0.2, 0]}>
            <ModelOrFallback />
          </group>
        </Suspense>

        <OrbitControls enablePan={false} enableZoom={false} autoRotate rotateSpeed={0.4} />
      </Canvas>
    </div>
  )
}

export default ContactExperience
