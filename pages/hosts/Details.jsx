import React,{useState} from 'react'
import { useOutletContext } from 'react-router-dom'
const Details = () => {
 const [details]=useOutletContext()
 console.log("Details,",details)
  
  return (
    <div className='max-w-96 '>
      <div className='flex flex-row items-center gap-x-1 my-2'>
        <p className='font-bold text-sm text-[#161616]'>Name:</p>
        <p className='font-normal text-sm text-[#161616]'>{details.name}</p>
      </div>

      <div className='flex flex-row items-center gap-x-1 my-2'>
        <p className='font-bold text-sm text-[#161616]'>Category:</p>
        <p className='font-normal text-sm text-[#161616]'>{details.type}</p>
      </div>

      <p className='font-normal text-sm text-[#161616]'><span className='font-bold text-sm text-[#161616] mr-1'>Description:</span>{details.description}</p>

      <div className='flex flex-row items-center gap-x-1 my-2'>
        <p className='font-bold text-sm text-[#161616]'>Visibility:</p>
        <p className='font-normal text-sm text-[#161616]'>Public</p>
      </div>
    </div>
  )
}

export default Details