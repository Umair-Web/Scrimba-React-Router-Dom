import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <header>
            <NavLink className="site-logo" to="/">#VanLife</NavLink>
            <nav>
                <NavLink className={({isActive})=>isActive?"underline":""} to="/host">Host</NavLink>
                <NavLink className={({isActive})=>isActive?"underline":""} to="/about">About</NavLink>
                <NavLink className={({isActive})=>isActive?"underline":""} to="/vans">Vans</NavLink>
                <NavLink className={({isActive})=>isActive?"underline":""} to="/Login">Login</NavLink>
            </nav>
        </header>
    )
}

export default Header