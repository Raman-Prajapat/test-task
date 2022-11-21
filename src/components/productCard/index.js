import React from 'react'
import SpecialOffer from '@components/SpecialOffer'
import { useHistory } from 'react-router-dom'
export default function ProductCard({ product, index }) {
    const history = useHistory()
    return (
        <div key={index} onClick={() => history.push(`/product-detail/${product.id}`)}>
            <div className='relative cursor-pointer bg-gray-2 p-[38px] h-[285px] w-full max-w-[285px] center rounded-[10px]'>
                <img className=' max-w-[235px] max-h-[210px] mix-blend-darken' src={product['images'][0] || ''} alt="" />
                <SpecialOffer>Special Offer</SpecialOffer>
            </div>
            <div className='flex flex-col gap-2 pt-4'>
                <span className='text-gray-text '>{product.name}</span>
                <span className={`font-bold text-gray-6 `}>AED&nbsp;{product.price}</span>
            </div>
        </div>
    )
}
