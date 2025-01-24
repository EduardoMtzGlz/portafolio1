"use client"

import IconsBento from "./IconsBento"
import Linkedin from "./Linkedin"
import GitHub from "./GitHub"
import FraseDia from "./FraseDia"
import Proyectos from "./Proyectos"

const BentoGrid = () => {

  
  return (
    <>
      <div className= "rounded-md p-4 dark:bg-neutral-800 bg-neutral-200 xl:col-span-2 xl:row-span-2 md:col-span-4 md:row-span-3  col-span-4 row-span-3 dark:hover:bg-neutral-700 hover:bg-neutral-400">
        <p className='text-center font-bold text-2xl md:mb-12 xl:mb-4'>Sobre mí</p>
        <p className=" text-lg">Desarrollador web con 1 año de experiencia. Formación como ingeniero en sistemas computacionales. Dominio de HTML, CSS y JavaScript para crear y estilizar interfaces de usuario. </p>
      </div>
      <div className= "rounded-md p-2 dark:bg-neutral-800 bg-neutral-200 xl:col-span-2 xl:row-span-2 md:col-span-4 md:row-span-3  col-span-4 row-span-3 dark:hover:bg-neutral-700 hover:bg-neutral-400">
        <p className='text-center font-bold text-2xl md:mb-10 xl:mb-4'>Habilidades</p>
        <ul className="list-disc p-3 xl:text-base text-xl">
          <li>Disposición para aprender nuevos lenguajes y herramientas de programación.</li>
          <li>Habilidad para crear sitios web responsivos para diferentes dispositivos y pantallas.</li>
          <li>Capacidad para identificar y solucionar errores en el código.</li>
        </ul>
      </div> 
      <div className= "rounded-md p-4 dark:bg-neutral-800 bg-neutral-200 xl:col-span-2 xl:row-span-2 col-span-4 row-span-3 dark:hover:bg-neutral-700 hover:bg-neutral-400">
        <p className='text-center font-bold text-2xl md:mb-12 xl:mb-4'>Proyectos</p>
        <Proyectos/>
      </div>      
       
      <div className= "rounded-md p-4 dark:bg-neutral-800 bg-neutral-200 xl:col-span-2 xl:row-span-3 md:col-span-4 md:row-span-4  col-span-4 row-span-4 dark:hover:bg-neutral-700 hover:bg-neutral-400">
        <p className='text-center font-bold text-2xl md:mb-12 xl:mb-4'>Tecnologías</p>
        <IconsBento/>
      </div> 
      <div className= "rounded-md dark:bg-neutral-800 bg-neutral-200 xl:col-span-1 xl:row-span-2 col-span-2 row-span-2 dark:hover:bg-neutral-700 hover:bg-neutral-400">
        <Linkedin/>
      </div>  
      <div className= "rounded-md dark:bg-neutral-800 bg-neutral-200 xl:col-span-1 xl:row-span-2 col-span-2 row-span-2 dark:hover:bg-neutral-700 hover:bg-neutral-400">
        <GitHub/>
      </div>  
      <div className= "rounded-md dark:bg-neutral-800 bg-neutral-200 xl:col-span-2 xl:row-span-1 col-span-4 row-span-1">
        <FraseDia/> 
      </div>  
       
       
    </>
  )
}

export default BentoGrid
