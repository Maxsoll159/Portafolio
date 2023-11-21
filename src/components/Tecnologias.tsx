import Image from 'next/image'
import { FaReact, FaHtml5 } from 'react-icons/fa'
import { SiTailwindcss } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";

export const Tecnologias = () => {
    return (
        <div className='row-span-5 fd:row-span-4 col-span-2 lg:row-span-2 lg:col-span-3 bg-[#020617] p-10 rounded-xl border border-gray-600'>
            <h3 className='font-bold text-3xl text-[#007bff]'>Tecnologías</h3>
            <div className='text-white grid grid-cols-2 lg:grid-cols-5 gap-5'>
                <div className='mt-5'>
                    <FaReact size={45} className="mx-auto text-[#61dafb]" />
                    <p className='text-center'>React</p>
                </div>

                <div className='mt-5'>
                    <Image src="/TypeScript.svg" width={45} height={45} alt='TypeScript' className='mx-auto' />
                    <p className='text-center'>TypeScript</p>
                </div>

                <div className='mt-5'>
                    <SiTailwindcss size={45} className="mx-auto text-[#38b2ac]" />
                    <p className='text-center'>Tailwind</p>
                </div>

                <div className='mt-5'>
                    <Image src="/JavaScript.svg" width={45} height={45} alt='JavaScript' className='mx-auto' />
                    <p className='text-center'>JavaScript</p>
                </div>

                <div className='mt-5'>
                    <Image src="/NextLogo.svg" width={45} height={45} alt='Next.js' className='mx-auto' />
                    <p className='text-center'>Next.js</p>
                </div>

                <div className='mt-5'>
                    <BsBootstrapFill size={45} className="mx-auto text-[#7952b3]" />
                    <p className='text-center'>Bootstrap</p>
                </div>

                <div className='mt-5'>
                    <FaHtml5 size={45} className="mx-auto text-[#e44d26]" />
                    <p className='text-center'>HTML5</p>
                </div>

                <div className='mt-5'>
                    <Image src="/firebase-icon.svg" width={45} height={45} alt='Firebase' className='mx-auto' />
                    <p className='text-center'>Firebase</p>
                </div>
            </div>
        </div>
    )
}
