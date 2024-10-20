import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
const HostLayout = () => {
    return (

        <div className='mx-4'>
            <nav className='w-80 flex flex-row justify-between flex-wrap'>

                <NavLink className={({ isActive }) => isActive ? "underline hover:cursor-pointer hover:underline font-medium text-[#4D4D4D] hover:text-black" : "hover:cursor-pointer hover:underline font-medium text-[#4D4D4D] hover:text-black"} end to=".">Dashboard</NavLink>

                {/* End tells to end teh matching with nested route */}
                {/* the dot in the to={} means the link is same as the parent and here parent is /host inshort do represents current path.*/}

                <NavLink
                    className={({ isActive }) => isActive ? "underline hover:cursor-pointer hover:underline font-medium text-[#4D4D4D] hover:text-black" : "hover:cursor-pointer hover:underline font-medium text-[#4D4D4D] hover:text-black"}
                    to="income">Income</NavLink>

                <NavLink
                    className={({ isActive }) => isActive ? "underline hover:cursor-pointer hover:underline font-medium text-[#4D4D4D] hover:text-black" : "hover:cursor-pointer hover:underline font-medium text-[#4D4D4D] hover:text-black"}
                    to="vans">Vans</NavLink>

                <NavLink
                    className={({ isActive }) => isActive ? "underline hover:cursor-pointer hover:underline font-medium text-[#4D4D4D] hover:text-black" : "hover:cursor-pointer hover:underline font-medium text-[#4D4D4D] hover:text-black"}
                    to="reviews">Reviews</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default HostLayout