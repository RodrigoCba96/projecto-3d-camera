import React, { useRef } from 'react'
import { useGLTF, useScroll, PresentationControls } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

export default function Camera(props) {
  const { nodes, materials } = useGLTF('/camera-transformed.glb')
  const groupRef = useRef()
  const scroll = useScroll()
  const { viewport } = useThree()

  useFrame((state) => {
    if (!groupRef.current) return

    const offset = scroll.offset 
    const presencia = Math.sin(offset * Math.PI)
    const isMobile = viewport.width < 5

    // 1. ROTACIÓN
    groupRef.current.rotation.y = offset * Math.PI * 2 
    groupRef.current.rotation.x = 0.1 + (presencia * 0.2) 
    groupRef.current.rotation.z = -0.05 

    // 2. POSICIÓN X
    groupRef.current.position.x = isMobile ? 0 : -2.5 
    
    // 3. POSICIÓN Y
    const flotacion = Math.sin(state.clock.elapsedTime * 2) * 0.1

    groupRef.current.position.y = isMobile 
      ? -viewport.height - 1.5 + flotacion 
      : -viewport.height - (viewport.height * 0.10) + flotacion

    // 4. POSICIÓN Z
    groupRef.current.position.z = -3 + (presencia * 2.5) 

    // 5. RESPONSIVVE
    groupRef.current.scale.setScalar(isMobile ? 0.05 : 0.09)
  })

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <PresentationControls 
        global={false}
        cursor={true}
        snap={true} 
        speed={2}
        polar={[-0.5, 0.5]}
        azimuth={[-Infinity, Infinity]}
      >
        <mesh 
          castShadow
          receiveShadow
          name="Object_8" 
          geometry={nodes.Object_8.geometry} 
          material={materials.Camera} 
        />
      </PresentationControls>
    </group>
  )
}

useGLTF.preload('/camera-transformed.glb')