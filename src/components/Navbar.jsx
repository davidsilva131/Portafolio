'use client'
import { useState } from 'react'
import HamburgerButton from './HamburguerButton'
import Links from './Links'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header>
        <nav className='bg-black fixed w-full z-20 top-0 left-0'>
          <div className='bg-black w-full flex flex-wrap items-center py-4 px-4 lg:px-52'>
            <div className='flex lg:hidden lg:order-2'>
              <HamburgerButton open={open} setOpen={setOpen} />
            </div>
            <Links open={open} setOpen={setOpen} />
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavBar
