'use client'
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Planet from "./Planet";

export default function Scene() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 100 }}>
      <fog attach="fog" args={['#202025', 0, 80]} />
      <mesh rotation-y={0.25}>
      <Planet/>
      </mesh>
      <OrbitControls autoRotate autoRotateSpeed={4}/>
    </Canvas>
  )
}