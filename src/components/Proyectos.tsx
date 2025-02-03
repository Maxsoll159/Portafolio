import { ProyectosData } from "@/utils/Proyectos"
import Image from "next/image"
import { BsBootstrapFill } from "react-icons/bs"
import { FaCss3Alt, FaHtml5, FaLink, FaReact } from "react-icons/fa"
import { SiAxios, SiTailwindcss } from "react-icons/si"
import { GiPadlock } from 'react-icons/gi'
import { ModalComponent } from "./ModalComponent"
export const Proyectos = () => {

  const icons: any = {
    'next': <Image src="/NextLogo.svg" width={20} height={20} alt='Next.js' className='mx-auto' />,
    'react': <FaReact size={20} className="mx-auto text-[#61dafb]" />,
    'javascript': <Image src="/JavaScript.svg" width={20} height={20} alt='JavaScript' className='mx-auto' />,
    'typescript': <Image src="/TypeScript.svg" width={20} height={20} alt='TypeScript' className='mx-auto' />,
    'tailwind': <SiTailwindcss size={20} className="mx-auto text-[#38b2ac]" />,
    'html': <FaHtml5 size={20} className="mx-auto text-[#e44d26]" />,
    'bootstrap': <BsBootstrapFill size={20} className="mx-auto text-[#7952b3]" />,
    'css': <FaCss3Alt size={20} className="mx-auto text-blue-500" />,
    'axios' : <SiAxios size={20} className="mx-auto text-[#383747]" />,
  }

  return (
    <div className="rounded-xl bg-[#020617] mt-5 border border-gray-700 p-5 lg:p-10">
      <h5 className="text-white font-bold text-3xl ">Proyectos</h5>
      <div className="grid grid-cols-1 mt-5 p-0 lg:p-5 space-y-5">

        {
          ProyectosData.map((proyecto) => (
            <div key={proyecto.id} className="rounded-lg flex items-center gap-7 flex-wrap lg:flex-nowrap bg-black border border-gray-500 p-7">
              <Image src={proyecto.imagen} width={300} height={500} alt="Proyecto 1 h-[1200px]" />
              <div className="space-y-2">
                <p className="font-bold text-2xl text-[#007bff]">{proyecto.nombre}</p>
                <div className="flex items-center gap-3 flex-wrap">
                  {
                    proyecto.tecnologias.map((tecnologia, index) => (
                      <div key={index} className="text-white flex items-center gap-3">
                        {icons[tecnologia.icons]}
                        <p className="font-semibold">{tecnologia.name}</p>
                      </div>
                    ))
                  }
                </div>
                <p className="text-gray-400">{proyecto.description}</p>
                <div className="flex text-white items-center justify-between gap-3 font-bold">
                  {proyecto.url === "privado" ? <div className="flex gap-3 items-center">
                    <GiPadlock size={25} />
                    <p>Privado</p>
                  </div> : <a href={proyecto.url} target="_blank" className="mt-2"><FaLink size={25} /></a>}
                  <ModalComponent />
                </div>
   
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}
