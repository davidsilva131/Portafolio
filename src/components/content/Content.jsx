import React from "react";
import Welcome from '../content/welcome/Welcome'
import '../../styles/content/Content.scss'
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
const Content = () => {
  return (
    <main className="content">
      <Welcome />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  )
};

export default Content;
