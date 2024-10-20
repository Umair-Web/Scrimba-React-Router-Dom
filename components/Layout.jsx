import React from 'react'
import { Outlet } from 'react-router-dom'
//Outlet is used to display our child components that are nested inside route component 

import Header from './Header'
import Footer from './Footer'
const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>  
    <Footer/>
    </>
  )
}

export default Layout