import show from '../../public/img/show.jpg'

export const Showcase = () => {
  return (
    <div className='w-full relative h-[915px]'>
        <div className='gradiente-web w-full h-[915px] absolute z-10'>
            <div className='text-white flex flex-col justify-end items-center text-center h-[95%] w-[900px] mx-auto'>
                <span className='text-7xl font-semibold'>Los mejores talentos de la industria call center</span>
                <span className='mt-2 text-xl'>Garantizamos la Presentación de un servicio óptimo por parte del capital humano</span>
            </div>
        </div>
        <img className='absolute z-0 h-full w-full' src={show.src} alt="" />
    </div>
  )
}
