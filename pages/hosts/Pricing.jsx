import React from 'react'
import { useOutletContext } from 'react-router-dom'
const Pricing = () => {
  const [price]=useOutletContext();
  return (
    <div className=''>
      <p className='font-normal text-sm text-[#161616]'><span className='font-bold text-2xl text-[#161616]'>${price.price}</span>/day</p>

    </div>
  )
}

export default Pricing