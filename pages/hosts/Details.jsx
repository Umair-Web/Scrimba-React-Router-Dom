import React,{useState} from 'react'
import { useOutletContext } from 'react-router-dom'
// useOutletContext is used when we have passed some context to outlet and wanted to use that state.Since outlet is used to place our child route components, we can pass some state to outlet and can use this state in this manner.
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