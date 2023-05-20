
import cocktailsLogo from '../assets/cocktailsLogo.webp'
import deliveryLogo from '../assets/logo_delivery.webp'
import quizLogo from '../assets/quiz-app.webp'
import tesolLogo from '../assets/tesollogo.webp'
import deliveryPrev from '../assets/delivery-screenshot.webp'
import cocktailsPrev from '../assets/cocktails-prev.webp'
import quizPrev from '../assets/quiz-prev.webp'
import tesolPrev from '../assets/tesolPrev.webp'
import Image from 'next/image'
import Link from 'next/link'

export const PROJECTS = [
  {
    title: 'DeliveryApp',
    description: 'Delivery app with admin view to management and user view, mobile emphasis',
    stack: ['React', 'Redux', 'Firebase', 'Sass', 'Material UI', 'Sweet Alert 2', 'Webpack'],
    deploy: 'https://sprint-final-23fa8.web.app/',
    repository: 'https://github.com/davidsilva131/sprint4',
    image: deliveryLogo,
    preview: deliveryPrev
  },
  {
    title: 'Cocktails',
    description: 'Web application to inventory and products management of a bar.',
    stack: ['Next.js', 'Firebase', 'Tailwindcss', 'Sweet Alert 2'],
    deploy: 'https://cocktails-next-azure.vercel.app/',
    repository: 'https://github.com/davidsilva131/Cocktails-Next',
    image: cocktailsLogo,
    preview: cocktailsPrev
  },
  {
    title: 'QuizApp',
    description: 'App like Trivia Crack, using the Open Trivia DB API.',
    stack: ['React', 'Zustand', 'CSS', 'Next UI', 'Vite'],
    deploy: 'https://quiz-app-with-zustand.vercel.app/',
    repository: 'https://github.com/davidsilva131/Quiz-App-With-Zustand',
    image: quizLogo,
    preview: quizPrev
  },
  {
    title: 'Tesol',
    description: 'Landing page to Tesol, social project of Tirol 3, neighborhood of San Cristobal, Medellín.',
    stack: ['Next.js', 'Threejs', 'Three Fiber', 'Three Drei', 'Tailwind', 'Valtio'],
    deploy: 'https://landing-tesol.vercel.app/',
    repository: 'https://github.com/davidsilva131/landing-tesol',
    image: tesolLogo,
    preview: tesolPrev
  }
]

const ProjectsCards = () => {

  return (
    <div className=' flex flex-wrap gap-14 justify-center mt-12'>
      {
        PROJECTS.map(project => (
          <article className='w-[340px] h-[450px] border border-gray-700 rounded-lg hover:opacity-90' key={project.title}>
            <div className='w-full h-full flex flex-col items-center justify-between'>
              <Link
                href={project.deploy}
                target='_blank'
                rel='noopener'
              >
                <Image src={project.preview} className='rounded-t-lg h-[180px] aspect-auto' width={340} height={180} alt={`${project.title} preview`} />
                <div className='flex w-full px-4 gap-1 mt-3'>
                  <Image src={project.image} className='w-[25px] h-[25px] aspect-auto' width={25} height={25} alt={`${project.title} logo`} />
                  <h3 className='text-[#22C55E] text-lg font-bold opacity-80 text-'>{project.title}</h3>
                </div>
                <div className='w-full flex flex-col gap-2 mt-2 px-4'>
                  <p className='text-sm tracking-wide'>{project.description}</p>
                  <div className='w-full flex gap-4 flex-wrap mt-3'>
                    {
                      project.stack.map(tech => (
                        <span key={`${project.title} stack ${tech}`} className='text-xs tex-white opacity-80 bg-gray-600 p-1 rounded-lg'>
                          {tech}
                        </span>
                      ))
                    }
                  </div>
                </div>
              </Link>
              <div className='w-full flex mb-4 px-4 gap-8'>
                <Link href={project.deploy} target='_blank' rel='noopener'>
                  <button aria-label={`${project.title} deploy`} type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Deploy
                  </button>
                </Link>
                <Link href={project.repository} target='_blank' rel='noopener'>
                  <button aria-label={`${project.repository} repository`} type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Repository
                  </button>
                </Link>
              </div>
            </div>
          </article>
        ))
      }
    </div>
  )
}

export default ProjectsCards