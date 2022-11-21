import { footerShopLinks, helpLinks, landingLinks } from '@utils/constants'
import { icons } from '@utils/icons';
import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  let year =  new Date().getFullYear();

  return (
    <section className='footer-gradient py-16 text-white'>
      <div className="container">
        <div className='grid grid-cols-12 gap-6 pb-8 border-b border-b-white/10'>
          <div className='col-span-5'>
            <h5 className='!text-[20px] mb-6'>Shop</h5>
            <div className='grid grid-cols-3 grid-rows-5 grid-flow-col gap-4'>
              {footerShopLinks.map((item,index)=>(
                <NavLink className={'text-gray-5 text-sm'} to={'/'}>{item.link}</NavLink>
              ))}
            

            </div>

          </div>
          <div className='col-span-2'>
          <h5 className='!text-[20px] mb-6'>LL</h5>
            <div className='flex flex-col gap-4'>
              {landingLinks.map((item,index)=>(
                <NavLink className={'text-gray-5 text-sm'} to={'/'}>{item.link}</NavLink>
              ))}
            

            </div>
          </div>
          <div className='col-span-2'>
          <h5 className='!text-[20px] mb-6'>Help</h5>
            <div className='flex flex-col gap-4'>
              {helpLinks.map((item,index)=>(
                <NavLink className={'text-gray-5 text-sm'} to={'/'}>{item.link}</NavLink>
              ))}
            

            </div>
          </div>
          <div className='col-span-3'>
          <h5 className='!text-[20px] mb-6'>Be in the know</h5>
          <p className='text-gray-5 text-sm'>Get the latest products, promotions, and design tips in your inbox. </p>
          <input type="text"  className='bg-input-1/20 mt-4' placeholder='Email Address'/>
          <button className='gradient-btn mt-4'>Subscribe</button>


          </div>


        </div>
        <div className="flex justify-between pt-10">
          <span className='text-gray-5 text-sm'>© {year} LL | Privacy  ·  Terms  ·  Sitemap</span>
          <div className='flex items-center gap-6'>
            <span className='text-sm font-bold'>Follow us on</span>
            <div className='flex items-center gap-3'>
              <a href='#' className='w-8 h-8 rounded-full center bg-white text-gray-icon'>
                {icons.linkedin}
              </a>
              <a href='#' className='w-8 h-8 rounded-full center bg-white text-gray-icon'>
                {icons.facebook}
              </a>
              <a href='#' className='w-8 h-8 rounded-full center bg-white text-gray-icon'>
                {icons.instagram}
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer