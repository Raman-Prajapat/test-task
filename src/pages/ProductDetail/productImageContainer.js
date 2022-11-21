import React, { useEffect } from 'react'
import SwipperProductImage from '@components/SwipperProductImage';
import SpecialOffer from '@components/SpecialOffer'

export default function ProductImageContainer({ productImages }) {
    const [selectedImage, setSelectedImage] = React.useState(productImages[0]);
    
    useEffect(() => {
        setSelectedImage(productImages[0])
    }, [productImages])
    return (
        <div className='detail-left '>
            <div>
                <div className='relative bg-gray-2 p-[40px] h-[578px] w-full max-w-[578px] center rounded-[10px]'>
                    <img className=' max-w-[390px] max-h-[496px] mix-blend-darken' src={selectedImage} alt="" />
                    <SpecialOffer>Sale</SpecialOffer>
                </div>
                <div className=" mt-3">
                    <SwipperProductImage productImages={productImages} setSelectedImage={setSelectedImage} />
                </div>
                <div className='mt-3 bg-gray-2 rounded-md px-4 py-3 flex gap-3 items-center'>
                    <img src="/images/product-detail/certification.svg" alt="" />
                    <div>
                        <h6 className='font-bold text-green-1'>Liv promise - only the best</h6>
                        <span className='text-sm'>All devices are in excellent condition and comes with damage protection.</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
