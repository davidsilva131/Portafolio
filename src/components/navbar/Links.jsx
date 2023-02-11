import React, { useState } from "react";
import { Link } from "react-scroll";
import '../../styles/navbar/Links.scss'

const Links = ({ menuOpen, setMenuOpen }) => {
  const [linkSelected, setLinkSelected] = useState("Inicio")
  const links = [
    {
      text: "Inicio",
      href: 'home'
    },
    {
      text: "Sobre mi",
      href: 'about'
    },
    {
      text: "Habilidades",
      href: "skills"
    },
    {
      text: "Proyectos",
      href: 'projects'
    },
    {
      text: 'Contacto',
      href: 'contact'
    }]

  const handleLink = (link) => {
    setLinkSelected(link)
    closeMenu()
  }

  const closeMenu = () => {
    menuOpen && setMenuOpen(!menuOpen)
  }

  return (
    <ul className="nav__links__list">
      {
        links.map((link, index) => (

          <li key={index}>
            <Link
              className={`link ${link.text === linkSelected ? 'active' : 'inactive'}`}
              to={link.href}
              smooth={true}
              duration={500}
              onClick={() => { handleLink(link.text) }}
            >
              {link.text}
            </Link>
          </li>

        ))
      }
    </ul >
  )
};

export default Links;
