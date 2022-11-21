

import Filter from '@components/Filter'
import GradientOutlineBtn from '@components/GradientOutlineBtn'
import Hamburg from '@components/Hamburg'
import Swipper from '@components/Swipper'
import { icons } from '@utils/icons'
import React, { useState } from 'react'
import { useEffect } from 'react'
import ProductList from './productList'
import { useSelector, useDispatch } from 'react-redux'
import { setFilterProduct } from '@redux/action'

const ListingPage = () => {
  const [sortby, setSortBy] = useState(false);
  const dispatch = useDispatch()
  const { filterProduct, category } = useSelector((state) => state.productReducer)
  const [select, setSelect] = useState('Most Popular');
  let toggleContainer = React.createRef();
  const sortdata = [
    { value: 1, label: 'Price (high to low)' },
    { value: 0, label: 'Price (low to high)' },
  ]

  useEffect(() => {
    window.addEventListener('click', onClickOutsideHandler);
  })

  const onClickOutsideHandler = (event) => {
    setSortBy(!sortby);
  }

  const handleSortItem = (type) => {

    let temp = [...filterProduct]
    if (type == 0) {
      temp.sort((a, b) => a.price - b.price)
      dispatch(setFilterProduct(temp))
    }
    else {
      temp.sort((a, b) => b.price - a.price)

      dispatch(setFilterProduct(temp))
    }
  }

  return (
    <div className='container py-6'>
      <Hamburg links={[{ name: 'All Products', path: '/' }]} />
      <div>
        <Swipper />
      </div>
      <div className='flex  gap-8 pt-12'>
        <div>
          <Filter />
        </div>
        <div className='flex-1'>
          <div className='flex justify-between'>
            <div>
              <h5 className='mb-2'>{category}</h5>
              <span>Seo text will be here</span>
            </div>
            <div className='flex  items-center gap-6'>
              <span className='text-gray-text font-bold text-sm flex-shrink-0'>Sort By</span>
              <div className='relative min-w-[200px] h-[40px]'>
                <div ref={toggleContainer} className={`absolute z-10 bg-white sort-by ${sortby && `active`}`}>
                  <div
                    onClick={() => {
                      setSortBy(!sortby);

                    }} className='flex justify-between items-center px-4 py-2 font-bold text-black'> <span>{select}</span> <img src="/images/product-detail/arrow.svg" alt="" /></div>
                  <ul className='flex flex-col '>

                    {sortdata.map((item, index) => (

                      <li onClick={() => {
                        setSortBy(!sortby);
                        setSelect(item.label);
                        handleSortItem(item.value);

                      }} key={index} className='py-3 px-4  border-b-[2px] border-gray-5 last:border-b-0'>{item.label}</li>
                    ))}

                  </ul>
                  <div className='flex justify-between items-center px-4 py-2 font-bold text-gradient-pink'> <span>Most Popular</span> <span className='w-5 h-5 center rounded-full bg-green-2 text-white text-[15px]'>{icons.check}</span></div>


                </div>
              </div>
            </div>
          </div>
          <ProductList />
          <div className='flex justify-center mt-6'><GradientOutlineBtn>Load More Products</GradientOutlineBtn></div>
        </div>

      </div>

    </div>
  )
}

export default ListingPage