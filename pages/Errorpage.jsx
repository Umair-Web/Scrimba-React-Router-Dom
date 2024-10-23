import React from 'react'
import { Link } from 'react-router-dom'
const Errorpage = () => {
    return (
        <div className='mx-7'>
            <h1 className='font-bold text-4xl text-[#161616]'>Sorry, the page you were looking for was not found.</h1>
            <Link to="/">
                <div className='bg-[#161616] text-center p-2 mt-4 '>
                    <p className='font-bold text-4xl text-[#FFFFFF]'>Return to home</p>
                </div>
            </Link>

        </div>
    )
}

export default Errorpage