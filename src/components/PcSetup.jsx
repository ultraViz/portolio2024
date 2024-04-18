import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function PcSetup(props) {
  const { nodes, materials } = useGLTF('models/PcSetup.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, 2.5, 0]} position={[0.3, .1, -0.1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={nodes.Cube001.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={nodes.Cube002.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Moniter_a_0.geometry}
          material={materials.material}
        />
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
          geometry={nodes.Moniter_a_0001.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Moniter_black_0001.geometry}
          material={materials.black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Moniter_desktop_0001.geometry}
          material={materials.desktop}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Moniter_White_0001.geometry}
          material={materials.White}
        />
      </group>

    </group>
  )
}

useGLTF.preload('models/PcSetup.glb')