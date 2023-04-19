import React from 'react';
import '../../../styles/about/About.scss';
const About = () => {
  return (
    <section id='about' className='fadeIn about'>
      <div className='about__title'>
        <h2>Sobre mi</h2>
      </div>
      <aside className='about__text'>
        <p>
          Apasionado a la programación, empático con las personas que me rodean,
          me gusta trabajar en equipo para lograr los objetivos que me propongo,
          tanto a nivel profesional como personal. Entre mis hobbies están
          escuchar música, ver películas, series y anime, ir al cine, jugar
          videojuegos con mis amigos y ver partidos de beisbol. Aparte de esto,
          con un grupo de amigos y amigas tenemos un proyecto social, con el
          cual queremos lograr un cambio en la sociedad en la que vivimos.
        </p>
      </aside>
    </section>
  );
};

export default About;
