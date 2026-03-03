import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import Lente from './Lente'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#bfbfbf' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        
        <ambientLight intensity={2} />
        <directionalLight position={[10, 10, 10]} intensity={2} />

        <Suspense fallback={<mesh><boxGeometry /><meshBasicMaterial color="red" /></mesh>}>
          <Lente />
        </Suspense>

        <gridHelper args={[20, 20]} />
        <axesHelper args={[5]} />

        <OrbitControls makeDefault />
      </Canvas>
    </div>
  )
}

export default App