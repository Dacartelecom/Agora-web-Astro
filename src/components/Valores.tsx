import logo1 from '../../public/img/logo1.png'
import logo2 from '../../public/img/logo2.png'
import logo3 from '../../public/img/logo3.png'
import logo4 from '../../public/img/logo4.png'
import logo5 from '../../public/img/logo5.png'
import logo6 from '../../public/img/logo6.png'

export const Valores = () => {
  return (
    <div className="flex flex-col items-center h-[700px]">
    <div className="my-5 text-6xl font-semibold"><span>Valores</span></div>
    <div className="columns-3 justify-center gap-[70px]">        
    
    <div className='flex flex-col gap-[10px] w-[400px] h-[300px] items-center justify-center'>
        <div className='flex justify-center gap-[20px] items-center'>
            <img className='h-[90px]' src={logo1.src} alt="Aqui va una imagen" />
            <span className=' w-[400px] text-[30px] text-left font-bold'>Calidad del Servicio al Cliente:</span>
        </div>
        <div className='text-center'>
            <span>
                La empresa se distingue por su eficiencia 
                operativa, utilizando tecnologías avanzadas 
                y procesos optimizados para gestionar las 
                llamadas de manera rápida y efectiva. Se busca 
                minimizar los tiempos de espera y maximizar la 
                productividad.
            </span>
        </div>
    </div>

    <div className='flex flex-col gap-[10px] w-[400px] h-[300px] items-center justify-center'>
        <div className='flex justify-center gap-[20px] items-center'>
            <img className='h-[90px]' src={logo2.src} alt="Aqui va una imagen" />
            <span className=' w-[400px] text-[30px] text-left font-bold'>Tecnología de Vanguardia:</span>
        </div>
        <div className='text-center'>
            <span>
            La empresa utiliza tecnología de vanguardia en 
            sus operaciones, incluyendo sistemas de gestión 
            de llamadas, software de análisis de datos y 
            herramientas de automatización. Esto no solo mejora 
            la eficiencia, sino que también permite una mayor 
            personalización en la interacción con los clientes.
            </span>
        </div>
    </div>

    <div className='flex flex-col gap-[10px] w-[400px] h-[300px] items-center justify-center'>
        <div className='flex justify-center gap-[20px] items-center'>
            <img className='h-[90px]' src={logo3.src} alt="Aqui va una imagen" />
            <span className=' w-[400px] text-[30px] text-left font-bold'>Flexibilidad y Adaptabilidad:</span>
        </div>
        <div className='text-center'>
            <span>   
                La empresa se adapta a las necesidades cambiantes 
                del mercado y de sus clientes. Se destacan por su 
                capacidad para ajustar rápidamente los recursos, 
                horarios y servicios según los requerimientos 
                específicos de cada cliente.
            </span>
        </div>
    </div>

    <div className='flex flex-col gap-[10px] w-[400px] h-[300px] items-center justify-center'>
        <div className='flex justify-center gap-[20px] items-center'>
            <img className='h-[90px]' src={logo4.src} alt="Aqui va una imagen" />
            <span className=' w-[400px] text-[30px] text-left font-bold'>Compromiso con la Seguridad de Datos:</span>
        </div>
        <div className='text-center'>
            <span>
                La empresa prioriza la seguridad y confidencialidad 
                de la información de los clientes. Se implementan 
                medidas rigurosas para proteger los datos sensibles, 
                cumpliendo con las normativas y estándares de 
                seguridad de la industria. La privacidad del cliente es 
                una prioridad fundamental.
            </span>
        </div>
    </div>

    <div className='flex flex-col gap-[10px] w-[400px] h-[300px] items-center justify-center'>
        <div className='flex justify-center gap-[20px] items-center'>
            <img className='h-[90px]' src={logo5.src} alt="Aqui va una imagen" />
            <span className=' w-[400px] text-[30px] text-left font-bold'>Formación Continua del Personal:</span>
        </div>
        <div className='text-center'>
            <span>
                La empresa se adapta a las necesidades cambiantes 
                del mercado y de sus clientes. Se destacan por su 
                capacidad para ajustar rápidamente los recursos, 
                horarios y servicios según los requerimientos 
                específicos de cada cliente.
            </span>
        </div>
    </div>

    <div className='flex flex-col gap-[10px] w-[400px] h-[300px] items-center justify-center'>
        <div className='flex justify-center gap-[20px] items-center'>
            <img className='h-[90px]' src={logo6.src} alt="Aqui va una imagen" />
            <span className=' w-[400px] text-[30px] text-left font-bold'>Eficiencia Operativa:</span>
        </div>
        <div className='text-center'>
            La empresa se distingue por su eficiencia operativa, 
            utilizando tecnologías avanzadas y procesos 
            optimizados para gestionar las llamadas de manera 
            rápida y efectiva. Se busca minimizar los tiempos de 
            espera y maximizar la productividad.
        </div>
    </div>

    </div>
    </div>
  )
}
