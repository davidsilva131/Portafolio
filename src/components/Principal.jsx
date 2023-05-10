import Scene from "./Scene/Scene"

const Principal = () => {
  return (
    <section id='home' className='mt-56 h-full w-full flex flex-col lg:flex-row lg:justify-center lg:gap-24 xl:gap-48 gap-5 items-center py-4 px-4 lg:px-52'>
      <aside className='flex flex-col gap-3 items-center lg:justify-start'>
        <h1 className='font-bold text-4xl flex flex-col items-center lg:items-start lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 xl:text-6xl'>
          David Silva
          <span className='font-base text-white text-xs lg:text-lg opacity-70'>FrontEnd Developer</span>
          <span className='mt-4 font-base text-center lg:text-left text-white text-sm lg:text-xl'>Make and get better web to be accessible to everyone</span>
        </h1>
      </aside>
      <aside className='items-center w-80 h-96'>
        <Scene />
      </aside>
    </section>
  )
}

export default Principal