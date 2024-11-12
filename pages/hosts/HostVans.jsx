import React, { useEffect, useState } from 'react'
import { Link,useLoaderData } from 'react-router-dom';

import { getHostVans } from '../../api';
import { requireAuth } from '../../utils';
export async function loader(){
 await requireAuth()
 return getHostVans()
}
// The above is named export and it helps to send multiple values.


const HostVans = () => {

   const hostvansData=useLoaderData()
     
    //----------------------------Old Logic---------------------
    // const [hostvansData, setHostVansData] = useState([]);
    // useEffect(() => {
    //     fetch('/api/host/vans')
    //         .then(res => res.json())
    //         .then(data => setHostVansData(data.vans))
    //     console.log("HostVansData=>", hostvansData)
    // }, [])
    //----------------------------Old Logic---------------------
    
    return (
        <div className='mt-4'>
            <h1 className="font-bold text-2xl text-[#161616]">Your listed vans</h1>
            <div className='mt-4'>
                {hostvansData.map((van) => (
                    // below we have previously used /host/vans/: but the route are nested and already following there parent and only change part is id so it changes to ont van.id and in the url it still be like /host/vans/:id
                    <Link to={van.id}>
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