import { CardExperiencia, CardFecha, CardHora, CardMe, CardPais, Tecnologias } from '@/components'
import { CardEducation } from '@/components/CardEducation'
import { Proyectos } from '@/components/Proyectos'

import Image from 'next/image'




export default function Home() {
  return (
    <main className="container mx-auto p-5 lg:py-20 lg:p-5">
      <article className='grid grid-cols-1 lg:grid-cols-8 gap-5 lg:auto-rows'>
        <CardMe />


        <CardPais />



        <div className='row-span-2 border border-gray-600 fd:row-span-3 col-span-2 lg:row-span-1 lg:col-span-2 bg-[#020617] rounded-xl  lg:flex text-[#007bff] p-10 flex-col items-center justify-center font-bold text-2xl transition-transform duration-300 hover:scale-105 hover:bg-[#1a1f2b]'>
          <p className='text-center text-lg font-semibold text-[#f0f4f7] mb-2'>Programador Frontend</p>
          <p className='text-center text-base text-[#dbe4ef] mt-4'>Realizo proyectos a medida. ¡Solicita una cotización sin compromiso!</p>
          <a
            href="https://wa.me/966966681?text=Hola%20me%20interesa%20contactarme%20contigo"
            target="_blank"
            className='text-sm'
            rel="noopener noreferrer"
          >
            <button className='mt-6 px-6 py-2 bg-[#25D366] text-white font-semibold rounded-lg shadow-lg hover:bg-[#128C7E] transition-colors duration-300'>
              Contáctame por WhatsApp
            </button>
          </a>
        </div>

        <CardExperiencia />

        <CardEducation />

        <Tecnologias />




        <CardHora />



        <CardFecha />



        <div className='row-span-4 hidden lg:block  col-span-2 lg:row-span-1 lg:col-span-3 bg-black border border-gray-600 rounded-xl text-white'>
          <Image src="/Gif3.webp" width={278} height={288} alt='XD' className='w-full h-full rounded-lg' />
        </div>





      </article>
      <Proyectos />
    </main>
  )
}
