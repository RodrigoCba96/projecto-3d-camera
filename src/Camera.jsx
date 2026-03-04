import React, { useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

export default function Camera(props) {
  const { nodes, materials } = useGLTF('/camera-transformed.glb')
  const groupRef = useRef()
  const scroll = useScroll()
  const { viewport } = useThree()

  useFrame(() => {
    if (!groupRef.current) return

    const offset = scroll.offset // Va de 0 a 1

    groupRef.current.rotation.y = offset * Math.PI * 6 
    groupRef.current.rotation.x = 0.2 + (offset * 0.5) 

    // 2. Posición X
    groupRef.current.position.x = -2.5 
    
    // 3. Posición Y
    groupRef.current.position.y = -viewport.height + (Math.sin(offset * Math.PI) * -0.5)

    // 4. Posición Z
    groupRef.current.position.z = -1 
  })

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh 
        name="Object_8" 
        geometry={nodes.Object_8.geometry} 
        material={materials.Camera} 
        scale={0.06} 
      />
    </group>
  )
}

useGLTF.preload('/camera-transformed.glb')