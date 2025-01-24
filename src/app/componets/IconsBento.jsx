import Image from "next/image"

const IconsBento = () => {
  return (
    <div className=" mt-4 grid lg:grid-cols-5 grid-cols-4 justify-items-center justify-center gap-5">
        <div>
        <Image src="/react.svg" width={80} height={80} alt="react-icon" className=" h-20"/>
        <p className="text-center mt-2 font-bold text-sm">React</p>
        </div>
        <div>
        <Image src="/next.svg" width={80} height={80} alt="next-icon" className="h-20"/>
        <p className="text-center mt-2 font-bold text-sm">NextJs</p>
        </div>
        <div>
        <Image src="/js.svg" width={70} height={70} alt="js-icon" className="h-20"/>
        <p className="text-center mt-2 font-bold text-sm">JavaScritp</p>
        </div>
        <div>
        <Image src="/css.svg" width={60} height={70} alt="css-icon" className="h-20"/>
        <p className="text-center mt-2 font-bold text-sm">CSS 3</p>
        </div>
        <div>
        <Image src="/tailwind.svg" width={80} height={80} alt="tailwindcss-icon" className="h-20"/>
        <p className="text-center mt-2 font-bold text-sm">Tailwind CSS</p>
        </div>
        <div>
        <Image src="/html.svg" width={80} height={80} alt="html-icon" className="h-20"/>
        <p className="text-center mt-2 font-bold text-sm">HTML 5</p>
        </div>
        <div>
        <Image src="/php.svg" width={80} height={80} alt="php-icon" className="h-20"/>
        <p className="text-center mt-2 font-bold text-sm">PHP</p>
        </div>
        <div>
            <Image src="/sass.svg" width={80} height={80} alt="sass-icon" className="h-20"/>
            <p className="text-center mt-2 font-bold text-sm">SASS</p>
        </div>          
        <div>
            <Image src="/mysql.svg" width={80} height={80} alt="sass-icon" className="h-20"/>
            <p className="text-center mt-2 font-bold text-sm">MYSQL</p>
        </div>          
        <div>
            <Image src="/node.svg" width={80} height={80} alt="node-icon" className="h-20"/>
            <p className="text-center mt-2 font-bold text-sm">NODE</p>
        </div>          
    </div>

  )
}

export default IconsBento