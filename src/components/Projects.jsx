import ProjectsCards from "./ProjectsCards"

const Projects = () => {
  return (
    <section id='projects' className='mt-56 w-full flex flex-col items-center py-4 px-4 lg:px-52'>
      <div>
        <h2 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500'>
          Projects
        </h2>
      </div>
      <ProjectsCards />
    </section>
  )
}

export default Projects