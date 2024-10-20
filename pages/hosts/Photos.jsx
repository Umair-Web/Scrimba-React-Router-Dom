import React from 'react'
import { useOutletContext } from 'react-router-dom'
const Photos = () => {
  const [image]=useOutletContext()
  return (
    <div>
      <img src={image.imageUrl} className='w-20 h-20 rounded-xl' alt="" />
    </div>
  )
}

export default Photos