import { ExpeData } from "@/utils/ExpeData"


export const CardExperiencia = () => {
    return (
        <div className='row-span-5 border border-gray-600 fd:row-span-4 col-span-2 lg:row-span-5 lg:col-span-5 bg-[#020617] rounded-xl p-10 gap-3 text-white'>
            <h3 className='text-[#007bff] font-bold text-3xl'>Experiencia</h3>
            <div className="flex-1 overflow-y-auto">
                {ExpeData.map((expe) => (
                    <div key={expe.id} className="mb-3">
                        <h4 className="text-2xl font-semibold text-[#007bff]">{expe.puesto}</h4>
                        <p className="text-white"><strong className="text-white">Empresa:</strong> {expe.nameEmpresa}</p>
                        <p className="text-white">{expe.inicio} - {expe.final}</p>
                        <ul className="list-disc list-inside text-gray-400 mt-3">
                            {expe.logros.map((logro, idx) => (
                                <li key={idx}>{logro}</li>
                            ))}
                        </ul>
                        <p className="text-white mt-2"><strong className="text-white">Tecnologías:</strong> {expe.tecnologias}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
