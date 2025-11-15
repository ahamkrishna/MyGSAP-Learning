import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useState } from 'react';
import { use } from 'react';
import { useRef } from 'react';


const App = () => {
  const randomX = gsap.utils.random(-500, 500, 100)
  const randomY = gsap.utils.random(-500, 500, 100)
  const rotateX = gsap.utils.random(-360, 360, 30)
  const [xValue, setXValue] = useState(0)
  const [yValue, setYValue] = useState(0)
  const [rotateValue, setRotateValue] = useState(0)

  const imageRef = useRef()

  useGSAP(()=>{
    gsap.to(imageRef.current, {
      x: xValue,
      y: yValue,
      duration: 0.6,
      rotate: rotateValue
    })
  }, {scope: "main", dependencies:[xValue, yValue, rotateValue]})

  return (
    <main>
      <img onClick={()=>{
        setXValue(randomX)
        setYValue(randomY)
        setRotateValue(rotateX)
      }} ref={imageRef} src="https://images.vexels.com/media/users/3/242241/isolated/preview/409d95bf597e130c6c1b1d2ac3f5dbf5-side-fly-geometric-color-stroke.png" alt="" />
    </main>
  )
}

export default App
