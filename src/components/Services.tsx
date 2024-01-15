import servicio1 from '../../public/img/servicio1.jpg'
import servicio2 from '../../public/img/servicio2.jpg'
import servicio3 from '../../public/img/servicio3.jpg'
import atc from '../../public/img/atc.png'
import back from '../../public/img/back.png'
import fono from '../../public/img/fono.png'


export const Services = () => {
  return (
    <div className='bg-[#14202C] w-full h-[800px] text-white relative overflow-hidden'>
        <div className='bg-[#FF4917] w-[700px] h-[700px] rounded-[50%] absolute right-[-150px] top-[-200px]'>
        </div>
        <div className='w-full h-full relative flex flex-col justify-center items-center gap-[30px]'>
            <div>
            <span className='text-7xl'>Nuestros Servicios</span>
            </div>
            <div className='flex justify-center gap-[50px]'>

                <div className='w-[450px] h-[600px] relative flex justify-center overflow-hidden'>
                    <img className='w-[450px] absolute z-0' src={servicio1.src} alt="" />
                    <div className='w-full h-full flex justify-center items-center'>
                        <div className='w-full h-full bg-black opacity-50 absolute'></div>
                        <div className='w-full h-full absolute z-20 flex flex-col justify-center items-center gap-[50px]'>
                                <img className='w-[250px]' src={atc.src} alt="" />
                            <div className='flex flex-col justify-center text-center'>
                                <span className='text-xl text-[#FF4917] font-bold'>Tu tranquilidad, nuestra prioridad</span>
                                <span className='text-4xl font-semibold'>Atención al Cliente</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-[450px] h-[600px] relative flex justify-center overflow-hidden'>
                    <img className='w-[450px] absolute z-0' src={servicio2.src} alt="" />
                    <div className='w-full h-full flex justify-center items-center'>
                        <div className='w-full h-full bg-black opacity-50 absolute z-10'></div>
                        <div className='w-full h-full absolute z-20 flex flex-col justify-center items-center gap-[50px]'>
                                <img className='w-[250px]' src={back.src} alt="" />
                            <div className='flex flex-col justify-center text-center'>
                                <span className='text-xl text-[#FF4917] font-bold'>Optimiza tu operación empresarial</span>
                                <span className='text-4xl font-semibold'>Backoffice</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-[450px] h-[600px] relative flex justify-center overflow-hidden'>
                    <img className='w-[450px] absolute z-0' src={servicio3.src} alt="" />
                    <div className='w-full h-full flex justify-center items-center'>
                        <div className='w-full h-full bg-black opacity-50 absolute z-10'></div>
                        <div className='w-full h-full absolute z-20 flex flex-col justify-center items-center gap-[50px]'>
                                <img className='w-[250px]' src={fono.src} alt="" />
                            <div className='flex flex-col justify-center text-center'>
                                <span className='text-xl text-[#FF4917] font-bold'>Optimiza tu operación empresarial</span>
                                <span className='text-4xl font-semibold'>Televentas</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
