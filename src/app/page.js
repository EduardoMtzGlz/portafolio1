"use client"
import {motion} from "motion/react"
import Image from 'next/image'
import Link from 'next/link'
import ThemeSwitcher from './componets/ThemeSwitcher'
import EfectoMaquina from './componets/EfectoMaquina'
import { siteConfig } from './config/config-site'
import BentoGrid from './componets/BentoGrid'


export default function Home() {

  const year= new Date().getFullYear(); 


  return (
    <main className='md:flex flex-1 gap-5 md:w-full md:h-full '>
      {/* Lado izquiero */}
      <motion.div initial={{opacity: 0, y: -100}}
        animate={{
          opacity: 1,
          y: 0,
	        transition:{duration:1}
        }}className='flex-1 p-6 md:h-full md:max-w-md'>
          <div className='flex-1 p-6 md:h-full md:max-w-md'>
            <div className='flex flex-col items-center h-full space-y-6 '>          
              <Image 
                src="/yo.png" 
                width={140} 
                height={250} 
                alt="imagen-eduardo" 
                className=" rounded-full"
                loading='eager'
                blurDataURL='blur'  
              />
              {/* Info */}
              <div className="flex flex-col w-full mt-8 ">
                <h1 className=' text-center md:text-left text-3xl font-bold mb-2'> 
                  <EfectoMaquina />
                </h1>          

            
                <h2 className='text-center md:text-left text-xl text-primary font-light mb-2'>{siteConfig.titulo}</h2>            
                <p className='mb-1 text-neutral-500'>{siteConfig.bio}</p>
                <div className='flex gap-2 mt-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <p >{siteConfig.lacacion}</p>
                </div>
                <Link className='flex mt-6 gap-2 justify-center border border-neutral-500 p-2 dark:border-neutral-500 dark:hover:border-neutral-200 hover:border-neutral-700  hover:shadow-md transition-all' href={`mailto:${siteConfig.email}`}>
                  
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <p>Contacto</p>
                  
                </Link>       
              </div>       
              {/* Termina seccion info */}
              {/* Footer */}
              <footer className='md:flex w-full mt-3 pt-5 border-t border-neutral-700 text-sm hidden'>
                <p className=' w-full text-neutral-700'>Creado por Eduardo Martínez | {year} | Powered By NextJs</p>
                <ThemeSwitcher/>
              </footer>
            </div>
          </div>
      {/* Termina lado izquierdo  */}
        </motion.div>
      {/* Inicia lado derecho */}
      <div className='flex-1 p-2 md:h-full'>
        <div className='flex items-center  h-full'>
          {/* Contenedor grid  */}
          
          <motion.div initial={{opacity: 0, y: 100}}
          animate={{
            opacity: 1,
            y: 0,
	          transition:{duration:1}
          }} className='w-full h-full md:overflow-y-auto p-5 grid grid-cols-4 auto-rows-[110px] xl:auto-rows-[90px] lg:auto-rows-[80px]  gap-3 md:gap-10'>
            <BentoGrid/>
          </motion.div>
        </div>
      </div>
      {/* Termina lado derecho */}

      <footer className='md:hidden w-full mt-3 pt-5 border-t border-neutral-700 text-sm flex'>
            <p className=' w-full text-neutral-700'>Creado por Eduardo Martínez | {year} | Powered By NextJs</p>
            <ThemeSwitcher/>
      </footer>

    </main>
  )
}
