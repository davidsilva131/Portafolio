import React from "react";
import '../../../styles/projects/Projects.scss'
import ProjectsCards from "./ProjectsCards";
const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects__tittle">
        <h2>Proyectos</h2>
      </div>
      <ProjectsCards />
    </section>
  )
};

export default Projects;
