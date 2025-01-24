import Image from "next/image"
import Link from "next/link"

const Linkedin = () => {
  return (
    <div className="flex flex-col items-center gap-3 p-5">
        <Image src="/linkedin.svg" alt="linkedin-icon" width={80} height={80}/> 
        <p className="text-neutral-500" >Linkedin</p>       
        <Link href="https://www.linkedin.com/in/eduardo-mart%C3%ADnez-gonz%C3%A1lez-b3bb162ab/" className="bg-sky-600 rounded-full text-white lg:w-26 w-28 p-2 hover:bg-sky-700 hover:shadow-slate-900 flex justify-center gap-6" target="_blank">
            Visitar
            <Image src="/link.svg" height={20} width={20} alt="link"/>
            
        </Link>
    </div>
  )
}

export default Linkedin