import React, { useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Lente(props) {
  const { nodes, materials } = useGLTF('/lente-transformed.glb')
  const groupRef = useRef()
  const scroll = useScroll()

  useFrame(() => {
    if (!groupRef.current) return

    const offset = scroll.offset // Va de 0 a 1

    groupRef.current.rotation.y = offset * Math.PI * 6 
    groupRef.current.rotation.x = 0.2 + (offset * 0.5) 

    // 2. Posición X (Izquierda/Derecha): 
    groupRef.current.position.x = 2 - (offset * 4) 
    
    // 3. Posición Y (Arriba/Abajo):
    groupRef.current.position.y = Math.sin(offset * Math.PI) * -0.5

    // 4. Posición Z (Profundidad): 
    groupRef.current.position.z = -1 
  })

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh 
        name="camera_lens_blinn2_0" 
        geometry={nodes.camera_lens_blinn2_0.geometry} 
        material={materials.blinn2} 
        // ¡Magia aquí! Bajamos la escala drásticamente
        scale={0.6} 
      />
    </group>
  )
}

useGLTF.preload('/lente-transformed.glb')