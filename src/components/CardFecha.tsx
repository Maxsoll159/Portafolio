

export const CardFecha = () => {
    const obtenerDiaSemana = () => {
        const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const fechaActual = new Date();
        const diaSemana = fechaActual.getDay(); // Retorna un valor entre 0 (Domingo) y 6 (Sábado)
        return diasSemana[diaSemana];
    };

    const formatoFecha = () => {
        const fechaActual = new Date();
        const opciones :any= { day: 'numeric', month: 'long', year: 'numeric' };
        return fechaActual.toLocaleDateString('es-ES', opciones);
    };


    return (
        <div className='col-span-2 lg:row-span-1 lg:col-span-2 bg-[#020617] rounded-lg border border-gray-600 p-10'>
            <p className="text-[#007bff] font-bold text-2xl">{obtenerDiaSemana()}</p>
            <p className="text-white text-xl">{formatoFecha()}</p>
        </div>
    )
}
