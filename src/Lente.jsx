import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Lente(props) {
  const { nodes, materials } = useGLTF('/lente-transformed.glb')
  
  return (
    <group {...props} dispose={null}>
      <mesh 
        name="camera_lens_blinn2_0" 
        geometry={nodes.camera_lens_blinn2_0.geometry} 
        material={materials.blinn2} 
        scale={1} 
      />
    </group>
  )
}

useGLTF.preload('/lente-transformed.glb')