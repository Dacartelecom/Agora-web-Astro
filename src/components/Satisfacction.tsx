import ceo from '../../public/img/ceo.png'
export const Satisfacction = () => {
  return (
    <div className='w-full h-[500px] flex justify-center items-end'>
        <div className="w-[1100px] h-[250px] bg-[#FF4917] rounded-3xl mb-5 flex justify-stretch text-white">
            <div className="h-full flex items-end w-[400px] mx-[40px]">
                <img src={ceo.src} alt="" />
            </div>
            <div className="h-[80%] flex items-center flex-col justify-center w-[650px] my-auto">
                <span className='w-full text-left text-[25px] font-bold mb-3'>SATISFACCIÓN DEL 100% EN CALIDAD DE SERVICIO</span>
                <span className='w-full text-left text-[17px]'>
                    La empresa prioriza la seguridad y confidencialidad 
                    de la información de los clientes. Se implementan 
                    medidas rigurosas para proteger los datos sensibles, 
                    cumpliendo con las normativas y estándares de 
                    seguridad de la industria. La privacidad del cliente es 
                    una prioridad fundamental.
                </span>
                <span className='w-full text-left text-[25px]'>Julian Rojas</span>
                <span className='w-full text-left text-[10px]'>Gerente-Agora Telecom</span>
            </div>
        </div>
    </div>
  )
}
