import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { ScrollControls, Scroll, Environment } from '@react-three/drei'
import Lente from './Lente'

function App() {
  return (
    // Un fondo elegante, típico de Apple/Canon
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#f5f5f7' }}>
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        
        {/* Environment crea reflejos realistas en el cristal y metal */}
        <Environment preset="city" />
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={2} />

        <Suspense fallback={null}>
          {/* pages={3} significa que la página equivale a 3 altos de pantalla. damping suaviza el scroll */}
          <ScrollControls pages={3} damping={0.25}>
            
            {/* 1. EL CONTENIDO 3D */}
            <Scroll>
              <Lente />
            </Scroll>

            {/* 2. EL CONTENIDO HTML (Textos) */}
            <Scroll html style={{ width: '100%', fontFamily: 'sans-serif' }}>
              
              {/* Pantalla 1 */}
              <div style={{ position: 'absolute', top: '20vh', left: '10vw' }}>
                <h1 style={{ fontSize: '4rem', margin: 0, color: '#111' }}>Siempre dispara<br/>como un <b>Pro</b>.</h1>
                <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '400px' }}>
                  Descubre nuestro lente más avanzado. Baja para explorar la tecnología detrás del cristal.
                </p>
              </div>

              {/* Pantalla 2 */}
              <div style={{ position: 'absolute', top: '130vh', right: '10vw', textAlign: 'right' }}>
                <h2 style={{ fontSize: '3rem', margin: 0, color: '#111' }}>Enfoque<br/>Absoluto.</h2>
                <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '400px', marginLeft: 'auto' }}>
                  Anillos de precisión milimétrica diseñados para los fotógrafos más exigentes.
                </p>
              </div>

              {/* Pantalla 3 */}
              <div style={{ position: 'absolute', top: '230vh', left: '10vw' }}>
                <h2 style={{ fontSize: '3rem', margin: 0, color: '#111' }}>Cristal Puro.</h2>
                <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '400px' }}>
                  Revestimiento multicapa que elimina los reflejos y aberraciones cromáticas.
                </p>
              </div>

            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App