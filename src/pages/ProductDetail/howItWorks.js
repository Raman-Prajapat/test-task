import React from 'react'
import { howItWorks, } from '@utils/constants'
export default function HowItWorks() {
    return (
        <div className="grid grid-cols-4 place-items-center gap-6">
            {howItWorks.map((item, index) => (
                <div className='flex flex-col items-center max-w-[250px]'>
                    <div className='bg-pink-light rounded-full relative center w-[150px] h-[150px]'>
                        <img src={item.imgpath} alt="" />
                        <div className='center border-2 border-pink-light w-10 h-10 bg-white rounded-full absolute top-[2px] left-[4px] '><span className='text-gradient-pink font-bold'>{item.step}</span></div>

                    </div>
                    <h6 className='mt-6 text-center'>{item.title} </h6>
                    <p className='text-gray-text text-center mt-4'>{item.para}</p>
                </div>
            ))}
        </div>
    )
}
