import React from "react";
import '../../../styles/skills/Skills.scss'
import SkillsCards from "./SkillsCards";

const Skills = () => {
  return (
    <section id="skills" className="skills" >
      <div className="skills__title">
        <h2>Habilidades</h2>
      </div>
      <div className="skills__technologies">
        <SkillsCards />
      </div>
    </section>
  )
};

export default Skills;
