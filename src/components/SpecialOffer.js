import React from 'react'

const SpecialOffer = ({children}) => {
  return (
    <div className='gradient-pink rounded-full px-1 py-[7px] absolute w-fit whitespace-nowrap top-3 center left-3 z-[5]'>
      <span className='bg-white absolute rounded-full inset-[1.6px] z-[1]'></span> <span className='text-gradient-pink relative z-[2] text-[10px] font-black px-1'>{children}</span></div>
  )
}

export default SpecialOffer