import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Vans = () => {
  const [vansData, setVansData] = useState([]);

  useEffect(() => {
    fetch('/api/vans')
      .then(res => res.json())
      .then(data => setVansData(data.vans))
    console.log("VansData=>", vansData)


  }, []);

  return (
    <div className=" mx-4">
      <p className="text-3xl sm:text-4xl font-bold text-[#161616]">Explore our van options</p>
      <div className="flex flex-wrap gap-y-2 flex-row mt-5 justify-between items-center">
        <button className="w-[104px] h-[37px] bg-[#FFEAD0] font-medium text-base text-center rounded-md hover:bg-[#E17654] hover:text-[#FFEAD0]">Simple</button>
        <button className="w-[104px] h-[37px] bg-[#FFEAD0] font-medium text-base text-center rounded-md hover:bg-[#161616] hover:text-[#FFEAD0]">Luxury</button>
        <button className="w-[104px] h-[37px] bg-[#FFEAD0] font-medium text-base text-center rounded-md hover:bg-[#115E59] hover:text-[#FFEAD0]">Rugged</button>
        <p className="hover:underline cursor-pointer">Clear filters</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-x-5 gap-y-4 mb-4">

        {/* Display van data */}
        {vansData.map((van) => (
          <Link to={`/vans/${van.id}`} className="" key={van.id}>
            <img className="w-full object-contain" src={van.imageUrl} alt={van.name} />
            <div className="flex flex-row justify-between mt-3">
              <p className="font-semibold text-xl text-[#161616]">{van.name}</p>
              <div className="flex flex-col items-end">
                <p className="font-semibold text-xl text-[#161616]">${van.price}</p>
                <p>/Day</p>
              </div>

            </div>
            <button className={`w-[104px] h-[37px]  font-medium text-base text-center rounded-md text-[#FFEAD0]
            ${van.type==='simple'?'bg-[#E17654]':''}
            ${van.type==='luxury'?'bg-[#161616]':''}
            ${van.type==='rugged'?'bg-[#115E59]':''}
            `}
            
            >{van.type}</button>


          </Link>
        ))}

      </div>
    </div>
  );
};

export default Vans;
