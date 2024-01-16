import cl1 from '../../public/img/cliente1.png'
import cl2 from '../../public/img/cliente2.png'
import cl3 from '../../public/img/cliente3.png'
import cl4 from '../../public/img/cliente4.png'
import cl5 from '../../public/img/cliente5.png'
import cl6 from '../../public/img/cliente6.png'

export const Clientes = () => {
  return (
    <div className="flex justify-around items-center w-full h-[500px] flex-col bg-[#14202C] text-white">
        <div>
            <span className='text-7xl font-bold'>CLIENTES</span>
        </div>

        <div className="columns-3 justify-center gap-[20px]">
            <img className='w-[300px] mb-5' src={cl1.src} alt="" />
            <img className='w-[300px] mb-5' src={cl2.src} alt="" />
            <img className='w-[300px] mb-5' src={cl3.src} alt="" />
            <img className='w-[300px] mb-5' src={cl4.src} alt="" />
            <img className='w-[300px] mb-5' src={cl5.src} alt="" />
            <img className='w-[300px] mb-5' src={cl6.src} alt="" />
        </div>
    </div>
  )
}
