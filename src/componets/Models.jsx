import React from 'react'
import { Canvas } from '@react-three/fiber'


const Models = () => {
  return (
    <canvas className='' camera={{ position: [0, 0, 15], fov: 50 }}>
      <ambientLight intensity={0.5} color="#0A0AE7FF" />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[10, 10, 10]} />
      {/* <Astronaut /> */}

      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </canvas>
  )
}

export default Models
