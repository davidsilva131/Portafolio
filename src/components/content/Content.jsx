import React from "react";
import Welcome from '../content/welcome/Welcome'
import '../../styles/content/Content.scss'
import About from "./about/About";
const Content = () => {
  return (
    <main className="content">
      <Welcome />
      <About />
    </main>
  )
};

export default Content;
