import Scene from "./Scene/Scene"

const Principal = () => {
  return (
    <section id='home' className='mt-24 h-full w-full flex flex-col lg:flex-row lg:justify-center lg:gap-24 xl:gap-48 gap-5 items-center py-4 px-4 lg:px-52'>
    <aside className='flex flex-col gap-3 items-center lg:justify-start'>
      <h1 className='font-bold text-4xl flex flex-col items-center lg:items-start lg:text-4xl text-[#22C55E] xl:text-6xl'>
      David Silva
      <span className='font-base text-white text-sm lg:text-xl opacity-70'>FrontEnd Developer</span>
      </h1>
    </aside>
    <aside className='items-center w-96 h-96'>
      <Scene/>
    </aside>
    </section>
  )
}

export default Principal