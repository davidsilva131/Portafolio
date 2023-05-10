import ProjectsCards from "./ProjectsCards"
import Title from "./Title"

const Projects = () => {
  return (
    <section id='projects' className='mt-56 w-full flex flex-col items-center py-4 px-4 lg:px-52'>
      <div>
        <Title>Projects</Title>
      </div>
      <ProjectsCards />
    </section>
  )
}

export default Projects