import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Chair(props) {
  const { nodes, materials } = useGLTF('models/Chair.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.8, 0]} rotation={[Math.PI / 2, 0, 4]} scale={0.042}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.back2.geometry}
          material={materials.aiStandardSurface1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.back_bone.geometry}
          material={materials.aiStandardSurface1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.butt.geometry}
          material={materials.aiStandardSurface1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.R_handle.geometry}
          material={materials.aiStandardSurface1}
          position={[-0.756, 0, 0]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/Chair.glb')