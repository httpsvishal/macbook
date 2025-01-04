import { OrbitControls, useGLTF, useScroll, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React from 'react'
import { Mesh } from 'three'
import * as THREE from 'three'

const MacContainer = () => {
    let model = useGLTF('./mac.glb')
    let tex = useTexture('./c2.webp')

    let meshes = {};
    model.scene.traverse((child) => {
        meshes[child.name] = child;
    });

    console.log(meshes)

    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
    meshes.matte.material.map = tex;
    meshes.matte.material.emissiveIntensity = 0;
    meshes.matte.material.roughness = 0;
    meshes.matte.material.metalness = 0.2;

    let data = useScroll();

    useFrame((state, delta) => {
      meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
  })

  return (
    <group position={[0,-10,20]}>
      <primitive object={model.scene} />
    </group>
  )
}

export default MacContainer
