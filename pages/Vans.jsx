import React, { useState, useEffect } from 'react';
import { Link,useSearchParams } from 'react-router-dom';
import { getVans } from '../api';
const Vans = () => {



  const [vansData, setVansData] = useState([]);
  const [loading, setloading] = useState(false);

  let [searchParams, setSearchParams] = useSearchParams();
  // Search params is used to get the query parameters from the url



  const typeFilter=searchParams.get("type")//

  console.log("Filter=>",typeFilter,"Type==>",typeof(typeFilter))

  const filtered=typeFilter?vansData.filter(vansData=>vansData.type.toLowerCase()===typeFilter):vansData


  useEffect(() => {
    async function loadvans() {
      setloading(true)
      const data=await getVans()
      setVansData(data)
      setloading(false)
      
    }
    loadvans()

  }, []);

  function handleFilterChange(key,value){
    setSearchParams(prevParams=>{
      if (value===null){
        prevParams.delete(key)
      }
      else{
        prevParams.set(key,value)
      }
      return prevParams
    })
  }
  if(loading){
    return (
      <h1 className='mx-6 text-5xl'>Loading....</h1>
    )
  }
  return (
    <div className=" mx-4">
      <p className="text-3xl sm:text-4xl font-bold text-[#161616]">Explore our van options</p>
      <div className="flex flex-wrap gap-y-2 flex-row mt-5 justify-between items-center">

        <button onClick={()=>handleFilterChange("type","simple")} className={`w-[104px] h-[37px]  font-medium text-base text-center rounded-md hover:bg-[#E17654] hover:text-[#FFEAD0] ${typeFilter==='simple'?"text-[#FFEAD0] bg-[#E17654]":"bg-[#FFEAD0]"}`}>Simple</button>

        <button onClick={()=>handleFilterChange("type","luxury")} className={`w-[104px] h-[37px]  font-medium text-base text-center rounded-md hover:bg-[#161616] hover:text-[#FFEAD0] ${typeFilter==='luxury'?"text-[#FFEAD0] bg-[#161616] ":"bg-[#FFEAD0]"}`}>Luxury</button>

        <button onClick={()=>handleFilterChange("type","rugged")} className={`w-[104px] h-[37px]  font-medium text-base text-center rounded-md hover:bg-[#115E59] hover:text-[#FFEAD0] ${typeFilter==='rugged'?"bg-[#115E59] text-[#FFEAD0]":"bg-[#FFEAD0]"}`}>Rugged</button>

        {typeFilter?(<Link onClick={()=>handleFilterChange("type",null)} className="hover:underline cursor-pointer">Clear filters</Link>):null} 

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-x-5 gap-y-4 mb-4">

        {/* Display van data */}
        {filtered.map((van) => (
          <Link to={van.id} key={van.id} state={{search:`?${searchParams.toString()}`,type:typeFilter} }>
            {/* State in Link is used to pass some kind of data between the links or any kind of that we want to reserve and use it somewhere else like when user when to go from one screen to another and wanted to pass some state then we can use it and utilize this state where the path specified  */}
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
