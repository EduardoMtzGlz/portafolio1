"use client"
import Typewriter from 'typewriter-effect';



const EfectoMaquina = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
      typewriter.typeString("Eduardo Martínez González")      
      .pauseFor(2500)      
      .start()
      
  }}
/>  )
}

export default EfectoMaquina