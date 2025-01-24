import Image from "next/image"
import Link from "next/link"

const GitHub = () => {
  return (
    <div className="flex flex-col items-center gap-3 p-5">
    <Image src="/github.svg" alt="linkedin-icon" width={80} height={80}/> 
    <p className="text-neutral-500">GitHub</p>       
    <Link href="https://github.com/EduardoMtzGlz" className="  text-white bg-slate-900 rounded-full w-32 p-2 hover:bg-slate-950 flex justify-center gap-6" target="_blank">
        Visitar
        <Image src="/link.svg" height={20} width={20} alt ="link"/>        
    </Link>
</div>

  )
}

export default GitHub