
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Screen(props) {
  const { nodes, materials } = useGLTF('models/screen.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.5, 0.7, -0.8]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 5.5, 0]} scale={0.012}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={31.434}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Moniter_black_0.geometry}
              material={materials.black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Moniter_desktop_0.geometry}
              material={materials.desktop}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Moniter_White_0.geometry}
              material={materials.White}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Moniter_a_0.geometry}
              material={materials.material}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/screen.glb')