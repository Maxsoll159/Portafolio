
import Image from 'next/image'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { TypeAnimationCom } from './TypeAnimationCom'

export const CardMe = () => {
    return (
        <div className='text-white row-span-4 col-span-2 lg:row-span-2 lg:col-span-6 bg-[#040913] transition-all flex flex-col md:flex-row rounded-xl border border-gray-600'>
            <div className='space-y-2 block p-7 lg:p-10 lg:pr-20'>
                <h1 className='font-bold text-3xl'>Martin Rios Tineo</h1>
                <TypeAnimationCom />
                <p className='text-white text-lg'>¡Saludos! Soy Martin, un entusiasta desarrollador front-end con una pasión por transformar ideas creativas en experiencias digitales sorprendentes. Mi enfoque va más allá del código; busco crear interfaces que no solo sean funcionales, sino que también cautiven a los usuarios desde el primer momento.</p>
                <div className='flex gap-4 justify-between items-end w-full'>
                    <button className='bg-red-500 p-2 rounded-md font-bold'>Descargar CV</button>

                    <div className='flex gap-3 items-center'>
                        <a href="www.linkedin.com/in/martin-rios-tineo" target='_blank'>
                            <FaLinkedin size={35} className="hover:text-[#0a66c2] transition-all hover:scale-125" />
                        </a>

                        <a href="https://github.com/Maxsoll159" target='_blank'>
                            <FaGithub size={35} className=" transition-all hover:scale-125" />
                        </a>
                    </div>
                </div>
            </div>

            <Image src="/fotoMartin.jpg" width={400} height={438} alt='Martin Rios Tineo' className='rounded-lg w-[250px] mx-auto' />
        </div>
    )
}
