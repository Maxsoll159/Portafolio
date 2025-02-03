
import Image from 'next/image'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { TypeAnimationCom } from './TypeAnimationCom'
import { PiDownloadSimpleBold } from "react-icons/pi";
export const CardMe = () => {
    return (
        <div className='text-white row-span-4 col-span-2 lg:row-span-2 lg:col-span-6 bg-[#040913] transition-all flex flex-col md:flex-row rounded-xl border border-gray-600'>
            <div className='space-y-2 block p-7 lg:p-10 lg:pr-20'>
                <h1 className='font-bold text-3xl'>Martin Rios Tineo</h1>
                <TypeAnimationCom />
                <p className='text-white text-lg text-justify'>Desarrollador Frontend con más de 3 años de
                    experiencia en la creación de aplicaciones web
                    dinámicas y escalables. Especializado en React,
                    Next.js, TypeScript, JavaScript, Tailwind CSS y
                    GitHub. Apasionado por la innovación y el
                    aprendizaje continuo, disfruto trabajar en equipo
                    y compartir conocimientos. Con habilidades de
                    liderazgo, he dirigido proyectos con éxito,
                    asegurando calidad, eficiencia y crecimiento para
                    los equipos y empresas con las que colaboro.
                </p>
                <div className='flex justify-between items-end w-full !mt-[10px]'>
                    <a href='/CV/CV_MartinRiosTineo.pdf' download="CV_MartinRiosTineo" target='_blank' className='bg-red-500 p-2 rounded-md font-bold flex items-center gap-2'>Descargar CV <PiDownloadSimpleBold size={25} /></a>

                    <div className='flex gap-3 items-center'>
                        <a href="https://linkedin.com/in/martin-rios-tineo" target='_blank'>
                            <FaLinkedin size={35} className="hover:text-[#0a66c2] transition-all hover:scale-125" />
                        </a>

                        <a href="https://github.com/Maxsoll159" target='_blank'>
                            <FaGithub size={35} className=" transition-all hover:scale-125" />
                        </a>
                    </div>
                </div>
            </div>

            <Image src="/fotoMartin.jpg" width={438} height={438} alt='Martin Rios Tineo' className='rounded-lg w-[250px] mx-auto' />
        </div>
    )
}
