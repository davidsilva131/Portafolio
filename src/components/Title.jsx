import React from 'react'

const Title = ({ children }) => {
  return (
    <h2 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500'>
      {children}
    </h2>
  )
}

export default Title