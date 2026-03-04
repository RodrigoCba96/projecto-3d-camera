import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { ScrollControls, Scroll, Environment, ContactShadows } from '@react-three/drei'
import Lente from './Lente'
import Camera from './Camera'
import CameraOld from './Camera-old'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#f5f5f7' }}>
      <Canvas shadows camera={{ position: [0, 0, 7], fov: 45 }}>
        
        <Environment preset="city" />
        <ambientLight intensity={1} />
        <directionalLight 
          castShadow 
          position={[10, 10, 10]} 
          intensity={2} 
          shadow-mapSize={[1024, 1024]} 
        />
        
        {/* Sombras*/}
        <ContactShadows 
          position={[0, -0.8, 0]}
          opacity={0.5} 
          scale={10} 
          blur={2} 
          far={4} 
        />

        <Suspense fallback={null}>
          <ScrollControls pages={3} damping={0.25}>
            
            <Scroll>
              <Lente />
              <Camera />
              <CameraOld />
            </Scroll>

            <Scroll html style={{ width: '100%', fontFamily: 'sans-serif' }}>
              
              {/* sec 1 */}
              <div style={{ position: 'absolute', top: '20vh', left: '10vw' }}>
                <h1 style={{ fontSize: '4rem', margin: 0, color: '#111' }}>Siempre dispara<br/>como un <b>Pro</b>.</h1>
                <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '400px' }}>
                  Descubre nuestro lente más avanzado. Baja para explorar la tecnología detrás del cristal.
                </p>
              </div>

             {/* sec 2 */}
            <div style={{ position: 'absolute', top: '130vh', right: '10vw', textAlign: 'right' }}>
               <h2 style={{ fontSize: '3rem', margin: 0, color: '#111' }}>Resolución<br/>Definitiva.</h2>
               <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '400px', marginLeft: 'auto' }}>
                  Sensor CMOS Full-Frame de 61 Megapíxeles impulsado por Inteligencia Artificial. Captura en 8K RAW con un rango dinámico que desafía a la realidad.
               </p>
            </div>

              {/* sec 3*/}
              <div style={{ position: 'absolute', top: '230vh', left: '10vw' }}>
                <h2 style={{ fontSize: '3rem', margin: 0, color: '#111' }}>Nuestro<br/>Legado.</h2>
                <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '400px' }}>
                  Construida para durar generaciones. Siente el peso de la historia en cada disparo mecánico, sin baterías, pura artesanía.
                </p>
              </div>

              <div style={{ 
                position: 'absolute', 
                top: '290vh', 
                width: '100vw', 
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <div style={{ width: '40px', height: '1px', backgroundColor: '#d1d1d4', marginBottom: '1.5rem' }}></div>
                
                <p style={{ 
                  margin: 0, 
                  fontSize: '0.85rem', 
                  color: '#86868b', 
                  letterSpacing: '0.05em' 
                }}>
                  &copy; 2026{' '}
                  <a 
                    href="https://www.linkedin.com/in/rodrigocordoba2296/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      color: '#111',
                      textDecoration: 'none', 
                      fontWeight: 'bold'
                    }}
                  >
                    RODRIGO CORDOBA
                  </a>
                  . TODOS LOS DERECHOS RESERVADOS.
                </p>
                
                <p style={{ 
                  margin: '0.5rem 0 0 0', 
                  fontSize: '0.75rem', 
                  color: '#a1a1a6', 
                  letterSpacing: '0.1em' 
                }}>
                  LA RIOJA, ARGENTINA
                </p>
              </div>

            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas> {/* <-- ¡Esta es la etiqueta que te faltaba! */}
    </div>
  )
}

export default App