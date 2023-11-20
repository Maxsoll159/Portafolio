"use client"
import { TypeAnimation } from 'react-type-animation';

export const TypeAnimationCom = () => {
  return (
    <div className='h-7'>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          '',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'Soy un programdor Front End',
          1000,
        ]}
        wrapper="span"
        speed={50}
        className='text-[#007bff] text-xl'
      />
    </div>
  )
}
