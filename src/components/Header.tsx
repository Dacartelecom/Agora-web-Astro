import logo from '../../public/img/agoraB.png'

export const Header = () => {
  return (
    <header className='w-full fixed z-20 flex items-center justify-center box-content'>
        <div className='bg-white h-[70px] w-[1100px] flex justify-stretch gap-[100px] items-center'>
            <div className='bg-[#FF4917] w-[250px] h-full flex justify-center items-center'><img className='w-[230px] px-[10px]' src={logo.src} alt="" /></div>
            <div className='text-black flex gap-[80px] text-3xl font-normal'>
            <span>Somos</span>
            <span>Valores</span>
            <span>Servicios</span>
            <span>Clientes</span>
        </div>
        </div>
    </header>
  )
}

export default Header