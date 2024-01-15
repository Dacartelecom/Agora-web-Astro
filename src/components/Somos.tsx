import somos from '../../public/img/somos.png'

export const Somos = () => {
  return (
    <div className='h-[450px] flex justify-center items-center w-full gap-[50px]'>
        <img className='w-[400px]' src={somos.src} alt="" />
        <div className='text-left flex flex-col w-[850px]'>
            <span className='text-5xl font-semibold my-3'>¿Quiénes somos?</span>
            <span className='text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. </span>
        </div>
    </div>
  )
}
