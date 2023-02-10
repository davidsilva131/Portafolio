import React, { useState } from "react";
import '../../styles/navbar/Links.scss'

const Links = () => {
  const [linkSelected, setLinkSelected] = useState("Inicio")
  const links = ["Inicio", "Sobre mi", "Habilidades", "Proyectos", "Contacto"]

  const handleLink = (link) => {
    setLinkSelected(link)
  }
  return (
    <ul className="nav__links__list">
      {
        links.map((link) => (
          <li key={link}
            className={`link ${link === linkSelected ? 'active' : 'inactive'}`}
            onClick={() => { handleLink(link) }}
          >
            {link}
          </li>
        ))
      }
    </ul>
  )
};

export default Links;
