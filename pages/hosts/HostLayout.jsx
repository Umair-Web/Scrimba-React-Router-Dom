import React from 'react'
import { Outlet,Link } from 'react-router-dom'
const HostLayout = () => {
    return (

        <div className='mx-4'>
            <nav className='w-80 flex flex-row justify-between flex-wrap'>
                
                <Link className='hover:cursor-pointer hover:underline font-medium text-[#4D4D4D] hover:text-black' to="/host">Dashboard</Link>
                <Link
                className='hover:cursor-pointer hover:underline font-medium text-[#4D4D4D] hover:text-black'
                to="/host/income">Income</Link>
                <Link
                className='hover:cursor-pointer hover:underline font-medium text-[#4D4D4D] hover:text-black'
                to="/host/reviews">Reviews</Link>
            </nav>
            <Outlet/>
        </div>
    )
}

export default HostLayout