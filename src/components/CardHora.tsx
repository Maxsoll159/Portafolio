"use client"
import { useEffect, useState } from "react";

export const CardHora = () => {
    const [hora, setHora] = useState(new Date());

    useEffect(() => {
        const intervalo = setInterval(() => {
            setHora(new Date());
        }, 1000);

        // Limpieza del intervalo al desmontar el componente
        return () => clearInterval(intervalo);
    }, []);

    const formatoHora = (fecha: any) => {
        const opciones = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true };
        return fecha.toLocaleTimeString(undefined, opciones);
    };
    return (

        <div className='col-span-2 lg:row-span-1 lg:col-span-1 bg-[#020617] rounded-lg border border-gray-600 text-white p-5 font-bold text-xl flex items-center justify-center flex-col'>
            <p id="hora-actual">{formatoHora(hora)}</p>
        </div>
    )
}
