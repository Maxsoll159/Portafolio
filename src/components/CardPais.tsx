import Image from "next/image"


export const CardPais = () => {
    return (
        <div className='row-span-1 col-span-2 bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center relative rounded-xl py-14 lg:py-0 border border-gray-600'>
            <h2 className='text-3xl lg:text-4xl font-bold text-white'>Perú</h2>
            <Image src="/BanderaPeru.png" width={30} height={30} alt='Peru' className='absolute left-[62%] top-[35%]' />
        </div>
    )
}
