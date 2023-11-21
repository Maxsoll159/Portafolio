import { CardExperiencia, CardFecha, CardHora, CardMe, CardPais, Tecnologias } from '@/components'
import { Proyectos } from '@/components/Proyectos'

import Image from 'next/image'




export default function Home() {
  return (
    <main className="container mx-auto p-5 lg:py-20 lg:p-5">
      <article className='grid grid-cols-1 lg:grid-cols-8 gap-5 lg:auto-rows-[150px]'>
        <CardMe />


        <CardPais />



        <div className='row-span-2 border border-gray-600 fd:row-span-3 col-span-2 lg:row-span-1 lg:col-span-2 bg-[#020617] rounded-xl hidden lg:block text-[#007bff] p-10 font-bold text-2xl'>
          <p className='text-center'>Desarrollador web</p>
          <p className='text-center'>Frontend</p>
        </div>

        <CardExperiencia />

        <Tecnologias />


        <CardHora />



        <CardFecha />



        <div className='row-span-4 hidden lg:block  col-span-2 lg:row-span-2 lg:col-span-3 bg-black border border-gray-600 rounded-xl text-white'>
          <Image src="/Gif3.webp" width={278} height={288} alt='XD' className='w-full h-full rounded-lg' />
        </div>

  



      </article>
      <Proyectos />
    </main>
  )
}
