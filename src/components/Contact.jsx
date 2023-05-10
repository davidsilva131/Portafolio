import Image from "next/image"
import Link from "next/link"
import Title from "./Title"

const CONTACT_LINKS = [
  {
    name: 'Github',
    link: 'https://github.com/davidsilva131',
    icon: 'https://icongr.am/entypo/github.svg?size=75&color=ffffff'
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/juan-david-silva-contreras-aa3091251/',
    icon: 'https://icongr.am/entypo/linkedin.svg?size=75&color=ffffff'
  },
  {
    name: 'Mail',
    link: 'mailto:davidsilvac131@gmail.com',
    icon: 'https://icongr.am/entypo/mail.svg?size=75&color=ffffff'
  }
]

const Contact = () => {
  return (
    <section id='contact' className='w-full mt-56 flex flex-col items-center gap-12'>
      <Title>Contact</Title>
      <div className='w-full flex flex-wrap gap-12 justify-center'>
        {
          CONTACT_LINKS.map(social => (
            <Link className='flex flex-col items-center gap-4 hover:opacity-80' key={social.name} href={social.link} target='_blank' aria-label={`Link to David Silva ${social.name}`}>
              <Image src={social.icon} width={75} height={75} alt='github logo' />
              <h4>{social.name}</h4>
            </Link>
          ))
        }
      </div>
    </section>
  )
}

export default Contact