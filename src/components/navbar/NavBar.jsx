import React, { useState } from "react";
import '../../styles/navbar/NavBar.scss';
import david from '../../assets/img-david.jpeg';
import Links from "./Links";
import Socials from "./Socials";
import menu from '../../assets/menu.svg'
import xLogo from '../../assets/xlogo.svg'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <header className="nav">
      <section className="fadeIn nav__photo">
        <figure>
          <img title="I'm David Silva" src={david} alt="David Photo" className="nav__photo__image" />
        </figure>
        <h1 className="nav__photo__name">David Silva</h1>
      </section>
      <section className={`fadeIn nav__links ${menuOpen ? 'show' : 'hidde'}`}>
        <Links />
      </section>
      <section className="fadeIn nav__socials">
        <Socials />
        <img className="nav__responsive" onClick={() => { handleMenu() }} src={menuOpen ? xLogo : menu} alt="Menu logo" />
      </section>
    </header>
  )
};

export default NavBar;
