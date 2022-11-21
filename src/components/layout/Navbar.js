import { navlinks } from '@utils/constants'
import { icons } from '@utils/icons'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
  let {pathname}=useLocation();
  
  return (
    <nav className='flex justify-center items-center h-[65px] w-full sticky top-0 bg-white z-[100]'>
      <div className="container flex justify-between items-center gap-8">
        <div className='cursor-pointer'>
          <h4>Logo Here</h4>
        </div>
        <div className="flex flex-1 justify-end items-center">
          <ul className='flex justify-center items-center gap-8'>
         {navlinks.map((item,index)=>(
          <NavLink key={index} className={`font-medium hover:text-gradient-pink ${pathname == item.path ? `text-gradient-pink font-bold`:``}`} to={'/'}>{item.link}</NavLink>
         ))}
          </ul>
        </div>
        <div className='flex items-center gap-4'>
          <div className='relative w-[183px]'>
            <input type="text" className='border-t-0 rounded-none h-[30px] px-4 py-1 border-x-0 border-b-2 border-b-gray-400 pr-8' />
            <span className='absolute right-2 top-1/2 -translate-y-1/2 text-[24px] z-[3] cursor-pointer '>{icons.search}</span>
          </div>
          <div className='flex items-center gap-3'>
            <span className='text-[25px]'>{icons.user}</span>
            <span className='text-[25px]'>{icons.bag}</span>
            
          </div>

        </div>

      </div>
     
    </nav>
  )
}

export default Navbar