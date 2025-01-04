import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MacContainer from './macContainer'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <div className='h-screen w-full'>
      <div className='absolute top-14 left-1/2 text-white -translate-x-1/2 flex flex-col items-center'>
        <h1 className='text-6xl tracking-tighter font-bold' >Explorin</h1>
        <h5 className='mt-2'>Oh so pro !</h5>
        <p className='text-center w-1/2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure laborum nobis accusantium rerum </p>
      </div>
      <Canvas camera={{fov:20,position:[0,-10,120]}} >
        {/* <OrbitControls /> */}
        <Environment 
          files={
            ["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"]}
        />
        <ScrollControls pages={3} >
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App
