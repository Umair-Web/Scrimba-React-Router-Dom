import React, { useState, useEffect } from 'react'
import { useParams, Link,useLocation } from 'react-router-dom'


//This is used to take out parameters from the url.
const VansDetail = () => {
    const param = useParams()
    console.log("Params=>", param)
    // To get the query parameters from the url.

    const location=useLocation()
    console.log("Location=>",location)
    // useLocation is used in order to get the state from the link which have passed some data to this screen in our case van's link have passed some state to van's detail page.

    const [data, SetData] = useState(null);


    useEffect(() => {
        fetch(`/api/vans/${param.id}`)
            .then(res => res.json())
            .then(data => SetData(data.vans))
        console.log("Data=>", data)
    }, [param])


  let search=location.state?.search || ''
  
  let currentBusType=location.state?.type || 'all'
    return (
        <div className="mx-8">
            <Link to={`..${search}`} relative='path'  className="hover:underline cursor-Linkointer">{`Back to ${currentBusType} vans`}</Link>

            <div className="grid grid-cols-1 mt-4 mb-4">

                {/* Display van data */}
                {data ?
                    <div className="" key={data.id}>
                        <img className="w-full object-cover h-[30%]" src={data.imageUrl} alt={data.name} />
                        <div className="flex flex-row justify-between mt-3">
                            <p className="font-semibold text-xl text-[#161616]">{data.name}</p>
                            <div className="flex flex-col items-end">
                                <p className="font-semibold text-xl text-[#161616]">${data.price}</p>
                                <p>/Day</p>
                            </div>

                        </div>
                        <p>{data.description}</p>
                        <button className={`w-[104px] h-[37px] mt-2  font-medium text-base text-center rounded-md text-[#FFEAD0]
                         ${data.type === 'simple' ? 'bg-[#E17654]' : ''}
                         ${data.type === 'luxury' ? 'bg-[#161616]' : ''}
                         ${data.type === 'rugged' ? 'bg-[#115E59]' : ''}`}

                        >{data.type}</button>


                    </div>
                    : <h1>Loading</h1>}

            </div>
        </div>
    )
}

export default VansDetail