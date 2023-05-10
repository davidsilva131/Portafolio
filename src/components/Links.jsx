'use client'
import { Link } from 'react-scroll'

const Links = ({ open, setOpen }) => {
  const pages = [
    {
      text: 'home',
      href: 'home'
    },
    {
      text: 'projects',
      href: 'projects',
    },
    {
      text: 'contact',
      href: 'contact'
    }
  ]
  return (
    <div
      className={`transition-all ease-out duration-500 lg:transition-none ${open ? 'h-screen' : 'h-0'
        }  items-center w-full lg:flex  lg:h-14 lg:w-auto lg:order-1`}
    >
      <ul
        className={`${!open && 'hidden'
          } lg:flex duration-300 ease-out lg:transition-none flex flex-col p-4 lg:p-0 mt-4 font-medium bg-transparent lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-transparent`}
      >
        {pages.map(page => (
          <li key={page.text}>
            <Link
              to={page.href}
              smooth={true}
              className='block cursor-pointer py-2 pl-3 pr-4 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-purple-500 rounded lg:bg-transparent lg:text-white lg:p-0 uppercase hover:text-green-500 hover:transition-all hover:duration-700'
            >
              {page.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Links
