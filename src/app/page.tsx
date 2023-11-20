import { CardFecha, CardHora, CardMe, CardPais, Tecnologias } from '@/components'
import { Proyectos } from '@/components/Proyectos'

import Image from 'next/image'

export default function Home() {
  return (
    <main className="container mx-auto p-5 lg:py-20 lg:p-5">
      <article className='grid grid-cols-1 lg:grid-cols-8 gap-5 lg:auto-rows-[150px]'>
        <CardMe />


        <CardPais />



        <div className='row-span-2 border border-gray-600 fd:row-span-3 col-span-2 lg:row-span-3 lg:col-span-2 bg-[#020617] rounded-xl hidden lg:block'>
          <Image src="/Gif.webp" width={310} height={490} alt='Animation' className='w-full rounded-xl h-full' />
        </div>

        <div className='row-span-5 border border-gray-600 fd:row-span-4 col-span-2 lg:row-span-2 lg:col-span-2 bg-[#020617] rounded-xl p-10 flex justify-center items-center flex-col gap-3 text-3xl font-bold text-[#007bff]'>
          <p>Desarrollador web</p>
          <p>Frontend</p>
        </div>


        <Tecnologias />

        <div className='col-span-2 lg:row-span-2 lg:col-span-4 border border-gray-600 rounded-lg p-10 bg-[#020617] flex flex-col'>
          <h3 className='text-[#007bff] font-bold text-3xl mb-4'>Experiencia</h3>

          <div className="flex-1 overflow-y-auto">
            <div className="mt-2">
              <h4 className="text-white text-xl font-semibold">Desarrollador Frontend en [Nombre de la Empresa]</h4>
              <p className="text-gray-300">Fecha de inicio - Fecha de finalización</p>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Desarrollé y mantuve interfaces de usuario responsivas utilizando React y CSS.</li>
                <li>Colaboré estrechamente con el equipo de diseño para implementar las especificaciones visuales.</li>
                <li>Optimicé el rendimiento de la aplicación y corregí errores de manera proactiva.</li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-white text-xl font-semibold">Desarrollador Frontend en [Nombre de otra Empresa]</h4>
              <p className="text-gray-300">Fecha de inicio - Fecha de finalización</p>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Lideré el desarrollo de una nueva funcionalidad que aumentó la retención de usuarios en un 20%.</li>
                <li>Trabajé en estrecha colaboración con el equipo de back-end para integrar nuevas características.</li>
              </ul>
            </div>
            {/* Agrega más secciones según sea necesario */}
          </div>
        </div>

        <CardHora />




        <div className='row-span-5 hidden lg:block fd:row-span-4 col-span-2 lg:row-span-2 lg:col-span-2 bg-black border border-gray-600 rounded-xl text-white'>
          <Image src="/Gif4.webp" width={20} height={20} alt='XD' className='w-full h-full' />
        </div>

        <CardFecha />



      </article>
      <Proyectos />
    </main>
  )
}
