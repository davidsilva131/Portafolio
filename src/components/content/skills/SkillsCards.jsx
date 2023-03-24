import React from "react";
import jsLogo from '../../../assets/js_logo.svg'
import reduxLogo from '../../../assets/redux-logo.svg'
import cssLogo from '../../../assets/css-3.svg'
import htmlLogo from '../../../assets/html-5.svg'
import firebaseLogo from '../../../assets/firebase.svg'
import sqlLogo from '../../../assets/sql.svg'
import '../../../styles/skills/Card.scss'
const SkillsCards = () => {

  const technologies = [
    {
      title: 'JavaScript',
      image: jsLogo
    },
    {
      title: 'React',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    {
      title: 'Sass',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg'
    },
    {
      title: 'CSS3',
      image: cssLogo
    },
    {
      title: 'HTML5',
      image: htmlLogo
    },
    {
      title: 'Git',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg'
    },
    {
      title: 'Redux',
      image: reduxLogo
    },
    {
      title: 'Firebase',
      image: firebaseLogo
    },
    {
      title: 'SQL',
      image: sqlLogo
    },
    {
      title: 'Axios',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Axios_logo_%282020%29.svg'
    },
    {
      title: 'Tailwind',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'
    },
    {
      title: 'NextJS',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1920px-Nextjs-logo.svg.png?20190307203525'
    },
    {
      title: 'Blender',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/1280px-Blender_logo_no_text.svg.png'
    },
    {
      title: 'ThreeJS',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Three.js_Icon.svg/1024px-Three.js_Icon.svg.png?20211115112438'
    }
  ]

  return (
    <>
      {
        technologies.map((tech) => (
          <aside key={tech.title} className="card">
            <div className="card__image">
              <img src={tech.image} alt={`${tech.title} Logo`} />
            </div>
            <div className="card__title">
              <span>{tech.title}</span>
            </div>
          </aside>
        ))
      }
    </>
  )
};

export default SkillsCards;
