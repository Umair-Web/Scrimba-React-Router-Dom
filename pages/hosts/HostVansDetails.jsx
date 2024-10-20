import React, { useEffect, useState } from 'react';
import { Link, useParams, NavLink, Outlet } from 'react-router-dom';

const HostVansDetails = () => {
    const { id } = useParams();
    const [currentVan, setCurrentVan] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => {
                setCurrentVan(data.vans[0]);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching van data:", err);
                setLoading(false);
            });
    }, [id]);

   
    if (loading) {
        return <p>Loading van details...</p>;  
    }

    
    if (!currentVan) {
        return <p>Van not found.</p>; 
    }

    return (
        <div className=''>
            <div className='mt-4'>
                <Link to=".." relative='path' className="hover:underline cursor-pointer">Back to all the vans</Link>
            </div>

            {/* relative=path means I want to go back but consider relation with the path /host/vans/1 that is in the browser not related to the nested routing parent route */}

            <div className='p-2 bg-white mt-4 rounded-xl'>
                <div className='flex flex-row gap-x-2 '>
                    <img className='w-40 h-40 object-contain rounded-xl' src={currentVan.imageUrl} alt={currentVan.name} />
                    <div className='items-start'>
                        <button
                            className={`w-[104px] h-[37px] mt-2 font-medium text-base text-center rounded-md text-[#FFEAD0]
                            ${currentVan.type === 'simple' ? 'bg-[#E17654]' : ''}
                            ${currentVan.type === 'luxury' ? 'bg-[#161616]' : ''}
                            ${currentVan.type === 'rugged' ? 'bg-[#115E59]' : ''}
                            `}
                        >
                            {currentVan.type}
                        </button>
                        <p className='font-semibold text-xl text-[#161616]'>{currentVan.name}</p>
                        <p className='font-medium text-base text-[#4D4D4D]'>${currentVan.price}/day</p>
                    </div>
                </div>
            </div>

            <div>

                <nav className='w-80 flex flex-row justify-between flex-wrap mt-4 mb-4'>

                    <NavLink className={({ isActive }) => isActive ? "underline hover:cursor-pointer hover:underline font-medium text-[#4D4D4D] hover:text-black" : "hover:cursor-pointer hover:underline font-medium text-[#4D4D4D] hover:text-black"} end to=".">Details</NavLink>



                    <NavLink
                        className={({ isActive }) => isActive ? "underline hover:cursor-pointer hover:underline font-medium text-[#4D4D4D] hover:text-black" : "hover:cursor-pointer hover:underline font-medium text-[#4D4D4D] hover:text-black"}
                        to="pricing">Pricing</NavLink>

                    <NavLink
                        className={({ isActive }) => isActive ? "underline hover:cursor-pointer hover:underline font-medium text-[#4D4D4D] hover:text-black" : "hover:cursor-pointer hover:underline font-medium text-[#4D4D4D] hover:text-black"}
                        to="photos">Photos</NavLink>


                </nav>
                <Outlet context={[currentVan]} />
                {/* Here we have passed data to our child routes,since outlet has our child route it provide cotext prop to pass data and we can use that data in our child route component using useoutletcontext */}
            </div>


        </div >
    );
};

export default HostVansDetails;
