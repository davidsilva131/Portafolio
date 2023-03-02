import React from "react";
import Welcome from '../content/welcome/Welcome'
import '../../styles/content/Content.scss'
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
const Content = () => {
  return (
    <main className="content">
      <Welcome />
      <About />
      <Skills />
      <Projects />
    </main>
  )
};

export default Content;
