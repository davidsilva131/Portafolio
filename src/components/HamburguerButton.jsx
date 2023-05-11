'use client'
const HamburgerButton = ({ open, setOpen }) => {
  return (
    <button
      aria-label='Hamburger menu'
      tabIndex={0}
      className='w-14 h-14 relative focus:outline-none bg-transparent rounded lg:hidden'
      onClick={() => {
        setOpen(!open)
      }}
    >
      <div className='block w-5 absolute left-6 top-1/2   transform  -translate-x-1/2 -translate-y-1/2'>
        <span
          className={`${open ? 'rotate-45' : '-translate-y-1.5'
            } block absolute h-0.5 w-7 text-green-500 bg-current transform transition duration-500 ease-in-out`}
        />
        <span
          className={`${open && 'opacity-0'
            }  absolute  h-0.5 w-5 block text-green-500 bg-current transform transition duration-500 ease-in-out`}
        />
        <span
          className={`${open ? '-rotate-45' : 'translate-y-1.5'
            } block absolute  h-0.5 w-7 text-green-500 bg-current transform  transition duration-500 ease-in-out`}
        />
      </div>
    </button>
  )
}

export default HamburgerButton
