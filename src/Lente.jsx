import React, { useRef } from 'react'
import { useGLTF, useScroll, PresentationControls } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

export default function Lente(props) {
  const { nodes, materials } = useGLTF('/lente-transformed.glb')
  const groupRef = useRef()
  const scroll = useScroll()
  const { viewport } = useThree()

 useFrame(() => {
    if (!groupRef.current) return
    const offset = scroll.offset
    
    const isMobile = viewport.width < 5

    groupRef.current.rotation.y = offset * Math.PI * 6 
    groupRef.current.rotation.x = 0.2 + (offset * 0.5) 

    groupRef.current.position.x = isMobile ? 0 : 2 - (offset * 4) 
    
    const baseY = isMobile ? -1.5 : 0
    groupRef.current.position.y = baseY + Math.sin(offset * Math.PI) * -0.5
    groupRef.current.position.z = -1 

    groupRef.current.scale.setScalar(isMobile ? 0.35 : 0.6)
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
          name="camera_lens_blinn2_0" 
          geometry={nodes.camera_lens_blinn2_0.geometry} 
          material={materials.blinn2} 
          scale={0.6} 
        />
      </PresentationControls>

    </group>
  )
}

useGLTF.preload('/lente-transformed.glb')