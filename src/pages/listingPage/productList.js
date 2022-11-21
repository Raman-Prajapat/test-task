import React from 'react'
import ProductCard from '@components/productCard'
import { useSelector } from 'react-redux'


const ProductList = () => {
    const { filterProduct } = useSelector((state) => state.productReducer)
    return (
        <div className='grid grid-cols-3 gap-x-6 gap-y-8 mt-6'>
            {filterProduct.map((product, index) => (
                <ProductCard product={product} index={index} />
            ))}
        </div>
    )
}
export default ProductList
