import React from "react";
import githubLogo from '../../assets/github.svg';
import linkedinLogo from '../../assets/linkedin.svg'
import emailLogo from '../../assets/email.svg'

const Socials = () => {
  const socials = [
    {
      social: "Github",
      logo: githubLogo,
      link: "https://github.com/davidsilva131"
    },
    {
      social: 'LinkedIn',
      logo: linkedinLogo,
      link: 'https://www.linkedin.com/in/juan-david-silva-contreras-aa3091251/'
    },
    {
      social: 'Correo',
      logo: emailLogo,
      link: 'mailto:davidsilvac131@gmail.com'
    }
  ]
  return (
    <>
      {
        socials.map((element) => (
          <a key={element.social} href={element.link} rel="noopener noreferrer" target="_blank">
            <img className="nav__socials__logo" title={element.social} src={element.logo} alt={`${element.social} Logo`} />
          </a>
        ))
      }
    </>
  )
};

export default Socials;
