import React, { useState } from 'react'
import ReactCustomSelect from '@components/ReactCustomSelect';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import { accordianContent, howItWorks, productfeatures, rentalPlan } from '@utils/constants'
import { productcolor } from '@utils/constants';

export default function ProductInfo({ productInfo }) {
    const [selectedProductColor, setSelectedProductColor] = useState(1);
    const [storage, setStorage] = useState('1TB');
    const handleProductColor = (index) => {
        setSelectedProductColor(index)
    }
    const handleStorage = (index) => {
        setStorage(index)
    }

    return (
        <div>
            <div className='h5 font-semibold mb-3'>{productInfo.name}</div>
            <h6 className='line-through mb-1'>AED 49/monthly</h6>
            <div> <span className='h6 text-gradient-pink font-bold'>Rent for AED 39/month </span><span className='text-sm font-semibold'>for 12 months</span></div>
            <div className='mt-6 flex items-center gap-6 flex-wrap'>
                {productfeatures.map((feature, index) => (
                    <div key={index} className='flex items-center gap-2'>
                        <img src={feature.imgpath} alt="" />
                        <span className='text-sm font-semibold'>{feature.productname}</span>

                    </div>
                ))}

            </div>
            <hr className='bg-gray-5 h-[1px] w-full mt-7 mb-6' />
            <div>
                <div><strong>Color:</strong> <span className='text-sm'>{productcolor[selectedProductColor]?.colorname}</span></div>
                <div className='flex items-center flex-wrap gap-3 mt-3 '>
                    {productcolor.map((color, index) => (
                        <div key={index} className={` rounded-full  relative  w-10 h-10 ${selectedProductColor === index ? `gradient-pink` : `bg-white`}`}>
                            <div onClick={() => handleProductColor(index)} style={{ background: `${color.color}` }} className={`absolute  inset-[1.6px] z-[1] rounded-full cursor-pointer `}></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-6'>
                <div><strong>Storage:</strong> <span className='text-sm'>{storage}</span></div>
                <div className='flex items-center  gap-3 mt-3 '>
                    {productInfo?.storageType.map((item, index) => (
                        <div key={index} className={` rounded-[6px] z-0   relative min-w-[83px] h-[43px]  center  ${storage == item ? `gradient-pink` : `bg-gray-5`}`}>
                            <div onClick={() => handleStorage(item)} className={`absolute  py-3  px-4  center bg-white  inset-[1.6px] z-[1] rounded-[4px] cursor-pointer `}> <span className={`relative font-bold z-[2] whitespace-nowrap ${storage == item && `text-gradient-pink`}`}>{item}</span> </div>
                        </div>
                    ))}

                </div>

            </div>
            <div className='mt-6'>
                <label htmlFor="" className='text-sm font-bold mb-3 flex'>Select your minimum rental plan</label>
                <ReactCustomSelect option={[...rentalPlan]} />
            </div>
            <button className='gradient-btn mt-4'>Checkout Now</button>
            <div className="flex gap-2 items-center bg-gray-1 rounded-md py-3 px-4 mt-4">
                <img src="/images/product-detail/file.svg" alt="" />
                <span className='font-semibold'> All subscriptions are subject to approval</span>

            </div>
            <div className="mt-6">
                <Accordion defaultIndex={[0]} allowMultiple>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                Product details
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                                {productInfo?.details}
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                Delivery and returns
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                What happens at the end of contract?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </AccordionPanel>
                    </AccordionItem>

                </Accordion>
            </div>

        </div>
    )
}
