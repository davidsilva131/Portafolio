import React from "react";
import '../../../styles/projects/ProjectsCards.scss'
import DeliveryLogo from '../../../assets/logo_delivery.svg'
import AgroHouseLogo from '../../../assets/agrohouse_verdeSinFondo.png'
import LolChampLogo from '../../../assets/lolchamp-logo.png'
const ProjectsCards = () => {
  const projects = [{
    name: "DeliveryApp",
    urlRepository: "https://github.com/davidsilva131/sprint4",
    urlDeploy: "https://sprint-final-23fa8.web.app/home",
    image: DeliveryLogo
  },
  {
    name: "AgroHouse",
    urlRepository: "https://github.com/davidsilva131/demo-day-projects-agrohouse",
    urlDeploy: "https://agrohouse-2bc5a.web.app/",
    image: AgroHouseLogo
  },
  {
    name: "LOLChampions",
    urlRepository: "https://github.com/nuthelk/LolChampions",
    urlDeploy: "",
    image: LolChampLogo
  }]
  return (
    <div className="ProjectsCards">
      {
        projects.map((project) => (
          <div key={project.name} className="project__card">
            <div className="project__card__image">
              <img src={project.image} alt="" />
            </div>
            <div className="project__card__tittle">
              <h3>{project.name}</h3>
            </div>
            <div className="project__card__buttons">
              <button
                className="project__card__button">
                <a href={project.urlRepository} target="_blank" rel="noreferrer" >
                  Repositorio</a>
              </button>
              <button
                className="project__card__button">
                <a href={project.urlDeploy} target="_blank" rel="noreferrer">
                  Despliegue</a>
              </button>
            </div>
          </div>
        ))
      }
    </div>
  )
};

export default ProjectsCards;
