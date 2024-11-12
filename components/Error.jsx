import { stringify } from 'postcss'
import React from 'react'
import { json, useRouteError } from 'react-router-dom'
// So in our one of route we have used an errorElement and pass this Error component to it,Now that route also passes down the error which we can use it here through useRouterError.
const Error = () => {
  const ERror = useRouteError()
  console.log("From error component==>", ERror.message)
  return (
    <>
      <div className='mx-5'>
        Error:{ERror.message}

      </div>
      
      <pre  className='mx-5'>
        This is a customized message.
        That is thrown from vans.jsx
      </pre>
    </>


  )
}

export default Error