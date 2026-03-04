import React, { useRef } from 'react'
import { useGLTF, useScroll, PresentationControls } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

export default function CameraOld(props) {
  const { nodes, materials } = useGLTF('/camera-old-transformed.glb')
  const groupRef = useRef()
  const scroll = useScroll()
  const { viewport } = useThree()

  useFrame((state) => {
    if (!groupRef.current) return

    const offset = scroll.offset 
    
    const presencia = Math.max(0, Math.sin((offset - 0.5) * Math.PI))
    
    groupRef.current.rotation.y = offset * Math.PI * 2 
    groupRef.current.rotation.x = 0.1 + (presencia * 0.2) 
    groupRef.current.rotation.z = 0.05 
    groupRef.current.position.x = 3.5 - (presencia * 1) 
    
    const flotacion = Math.sin(state.clock.elapsedTime * 2) * 0.1 
    groupRef.current.position.y = (-viewport.height * 2) + flotacion

    groupRef.current.position.z = -3 + (presencia * 2.5) 
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
        name="camera_Camera_0" 
        geometry={nodes.camera_Camera_0.geometry} 
        material={materials.Camera} 
        position={[-0.041, 0.001, -0.171]} 
        rotation={[-Math.PI / 2, 0, 0]} 
        scale={2}
      />        
      </PresentationControls>
    </group>
  )
}

useGLTF.preload('/camera-old-transformed.glb')