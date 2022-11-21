import React, { useEffect } from 'react'
import { icons } from '@utils/icons';
import { RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from '@chakra-ui/react';
import { useDispatch, useSelector } from "react-redux";
import { setFilterProduct, setCategory } from '@redux/action';

const brands = ['All', 'Apple', 'Samsung', 'Black berry', 'Sony', 'Asus', 'Google']

const Filter = () => {
  const dispatch = useDispatch()
  const [priceRange, setPriceRange] = React.useState([0, 3255])

  const { allProduct, filterProduct, category } = useSelector((state) => state.productReducer)
  const [brandFilter, setBrandFilter] = React.useState([]);

  const handleChnagePrice = (data) => {
    setPriceRange(data)
    let temp = []

    allProduct.map(item => {
      if (item.price > data[0] && item.price < data[1]) {
        if (category == 'All Category') {
          if (brandFilter.length > 0 && !brandFilter.includes('All')) {
            if (brandFilter.includes(item.brand)) temp.push(item)
          }
          else {
            temp.push(item)
          }
        }
        else if (category == item.category) {
          if (brandFilter.length > 0 && !brandFilter.includes('All')) {
            if (brandFilter.includes(item.brand)) temp.push(item)
          }
          else {
            temp.push(item)
          }
        }
      }
    })
    dispatch(setFilterProduct(temp))

  }

  useEffect(() => {
    let temp = []
    if (brandFilter && brandFilter.length > 0 && !brandFilter.includes('All')) {
      allProduct.map(item => {
        if (category == 'All Category' && brandFilter.includes(item.brand)) {
          temp.push(item)
        }
        else if (item.category == category && brandFilter.includes(item.brand))
          temp.push(item)
      })
      dispatch(setFilterProduct(temp))
    }
    else if (brandFilter.includes('All')) {
      allProduct.map(item => {
        if (category == 'All Category') {
          temp.push(item)
        }
        else if (item.category == category)
          temp.push(item)
      })
      dispatch(setFilterProduct(temp))
    }

  }, [brandFilter])

  const handleBrandFilter = (name, e) => {
    let temp = brandFilter.slice(0);
    if (e.target.checked) {
      temp.push(name)
    }
    else {
      temp = temp.filter((brand) => name != brand)
    }
    setBrandFilter(temp)
  }

  useEffect(() => {
    let temp = []
    if (category == 'All Category') {
      if (brandFilter.length > 0) {
        allProduct.map(item => {
          if (brandFilter.includes(item.brand)) {
            temp.push(item)
          }
        })

      }
      else {
        dispatch(setFilterProduct(allProduct))
      }
    }

    else {
      allProduct.map(item => {
        if (brandFilter.length > 0 && !brandFilter.includes('All')) {
          if (brandFilter.includes(item.brand) && item.category == category) {
            temp.push(item)
          }
        } else if (item.category == category) { temp.push(item) }

      })
      dispatch(setFilterProduct(temp))
    }
  }, [category])

  
  return (
    <div className='w-[300px] lg:sticky top-20 flex flex-col gap-8'>
      <div>
        <h6 className='mb-4'>Filter By</h6>
        <div>
          <div className='flex gap-2 cursor-pointer items-center mb-2' onClick={() => dispatch(setCategory('All Category'))}> <span className='text-sm'>{icons.prev}</span> <span className='font-semibold text-sm'>All Categories</span></div>
          <ul className='ml-4 space-y-2'>
            <li onClick={() => dispatch(setCategory('Laptop'))} className={` ${category == 'Laptop' && 'text-gradient-pink'} cursor-pointer font-semibold text-sm`}>Laptop</li>
            <li onClick={() => dispatch(setCategory('Mobile'))} className={` ${category == 'Mobile' && 'text-gradient-pink'} cursor-pointer font-semibold text-sm`}>Mobile</li>
            <li onClick={() => dispatch(setCategory('Console'))} className={`${category == 'Console' && 'text-gradient-pink'} cursor-pointer font-semibold text-sm`}>Console</li>
          </ul>
        </div>
      </div>
      <div>
        <h6 className='mb-4'>Price Per Month</h6>
        <div>
          <RangeSlider
            aria-label={['min', 'max']}
            min={0} max={3255}
            colorScheme='pink'
            defaultValue={[0, 2355]}
            onChange={handleChnagePrice}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>

        </div>
        <div className="flex justify-between mt-2">
          <span className='text-xs font-semibold'>AED {priceRange[0] || '0'}</span>
          <span className='text-xs font-semibold'>AED {priceRange[1] || '3255'}</span>
        </div>
      </div>

      <div>
        <h6 className='mb-4'>Brands</h6>
        <div >
          <div className='flex flex-col gap-4 brands'>

            {brands.map((item, index) => (
              <label htmlFor={`cat-${index}`} className='flex gap-6 items-center'>
                <input type="checkbox" name="" id={`cat-${index}`} hidden onChange={(e) => handleBrandFilter(item, e)} />
                <span> <i>{icons.check} </i></span>
                <div className='name font-medium text-sm'>{item} </div>
              </label>
            ))
            }
          </div>
        </div>
      </div>


    </div>
  )
}

export default Filter