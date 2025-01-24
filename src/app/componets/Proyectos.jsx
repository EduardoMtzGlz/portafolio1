import Image from "next/image"
import Link from "next/link"

const Proyectos = () => {
    return (
        <div className=" mt-4 grid lg:grid-cols-5 grid-cols-4 justify-items-center justify-center gap-5">
            <Link href="https://eduardomtzglz.github.io/buscadorRecetas/" target="_blank" className=" hover:border-b-2 transition-all pb-2">
                <Image src="/food.svg" width={80} height={80} alt="react-icon" className=" h-20 w-full"/>
                <p className="text-center mt-2 font-bold text-sm">Buscador de recetas</p>
            </Link>
            <Link href="https://eduardomtzglz.github.io/gestionClientes/" target="_blank" className=" hover:border-b-2 transition-all pb-2">
                <Image src="/client.svg" width={80} height={80} alt="next-icon" className="h-20 w-full"/>
                <p className="text-center mt-2 font-bold text-sm">Gestión de clientes</p>
            </Link>
            <Link href="https://eduardomtzglz.github.io/cotizador/" target="_blank" className=" hover:border-b-2 transition-all pb-2">
                <Image src="/cryp.svg" width={70} height={70} alt="js-icon" className="h-20 w-full"/>
                <p className="text-center mt-2 font-bold text-sm">Cotizador de criptos</p>
            </Link>
            <Link href="https://eduardomtzglz.github.io/buscadorImg/" target="_blank" className=" hover:border-b-2 transition-all pb-2" >                
                <Image src="/img.svg" width={70} height={70} alt="css-icon" className="h-20 w-full"/>
                <p className="text-center mt-2 font-bold text-sm">Buscador de imgénes</p>               
            </Link>
            
            <Link href="https://eduardomtzglz.github.io/Festival/" target="_blank" className=" hover:border-b-2 transition-all pb-2">
                <Image src="/rock.svg" width={80} height={80} alt="tailwindcss-icon" className="h-20 "/>
                <p className="text-center mt-2 font-bold text-sm">Festival</p>
            </Link>
        </div>

    )
}

export default Proyectos; 