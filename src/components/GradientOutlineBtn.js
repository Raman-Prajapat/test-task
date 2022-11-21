import React from 'react'

const GradientOutlineBtn = ({children}) => {
  return (
   <button className='gradient-pink rounded-md px-8  min-h-[60px] center relative'> <span className='bg-white absolute rounded-[4px] inset-[1.6px] z-[1]'></span> <span className='text-gradient-pink relative z-[2]  font-bold'>{children}</span></button>
  )
}

export default GradientOutlineBtn