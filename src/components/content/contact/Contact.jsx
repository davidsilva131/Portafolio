import React from "react";
import '../../../styles/contact/Contact.scss'
import LinkedinLogo from '../../../assets/linkedin.svg'
import GithubLogo from '../../../assets/github.svg'
import MailLogo from '../../../assets/email.svg'

const Contact = () => {

  const contacts = [
    {
      image: LinkedinLogo,
      text: "Linkedin",
      url: "https://www.linkedin.com/in/juan-david-silva-contreras-aa3091251/"
    },
    {
      image: GithubLogo,
      text: 'Github',
      url: "https://github.com/davidsilva131"
    },
    {
      image: MailLogo,
      text: 'Correo',
      url: "mailto:davidsilvac131@gmail.com"
    }
  ]
  return (
    <section id="contact" className="contact">
      <div className="contact__tittle">
        <h2>Contactame</h2>
      </div>
      <div className="contact__body">
        {
          contacts.map((contact) => (
            <div key={contact.text} className="contact__card">
              <div>
                <a href={contact.url} target="_blank" rel="noopener noreferrer"><img className="contact__card__image" src={contact.image} alt="" /></a>
              </div>
              <div className="contact__card__text">
                <h3>{contact.text}</h3>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
};

export default Contact;
