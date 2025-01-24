"use client"
import { formatearFecha } from "../utils"

const FraseDia =  () => {    
 
  const fecha = new Date();
    return (
    <div className="flex items-center justify-center h-full">        
        <p className=" text-center text-xl text-neutral-500">{formatearFecha(fecha)}</p>
    </div>
  )
}

export default FraseDia