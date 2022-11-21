import React from 'react'
import { NavLink } from 'react-router-dom'
import { icons } from '@utils/icons';

const Hamburg = ({links}) => {
  return (
    <div className='flex items-center gap-2'>
       <NavLink className={`text-gray-6 text-[12px]`} to='/'>Home</NavLink>
      {links.map((link,index)=>(
        <React.Fragment key={index}>
         <span className='text-gray-6 text-[12px]'>{icons.next}</span>
         <NavLink to='/' className={` text-xs ${links.length-1===index ?'font-semibold':''}`}>{link.name}</NavLink>
        </React.Fragment>
      ))}
    </div>
  )
}

export default Hamburg