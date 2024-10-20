import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const HostVans = () => {
    const [hostvansData, setHostVansData] = useState([]);
    useEffect(() => {
        fetch('/api/host/vans')
            .then(res => res.json())
            .then(data => setHostVansData(data.vans))
        console.log("HostVansData=>", hostvansData)

    }, [])
    return (
        <div className='mt-4'>
            <h1 className="font-bold text-2xl text-[#161616]">Your listed vans</h1>
            <div className='mt-4'>
                {hostvansData.map((van) => (
                    <Link to={`/host/vans/${van.id}`}>
                        <div key={van.id} className='rounded-md my-2 p-2 bg-[#FFFFFF]'>
                            <div className='flex flex-row items-center gap-x-3'>
                                <img className='h-16 w-16 object-contain' src={van.imageUrl} alt="" />
                                <div className='items-start'>
                                    <p className='font-semibold text-xl text-[#161616]'>{van.name}</p>
                                    <p className='font-medium text-base text-[#4D4D4D]'>${van.price}/day</p>
                                </div>
                            </div>

                        </div></Link>


                ))}

            </div>
        </div>
    )
}

export default HostVans