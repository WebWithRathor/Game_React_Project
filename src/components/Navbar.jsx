import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/controller.png'
const Navbar = () => {
  return (
    <>

    <nav className='w-full flex justify-between px-14 py-4 text-white items-center'>
        <div className="logo">
            <NavLink to='/' className='text-white text-3xl font-semibold' >
                <img className='h-14' src={logo} alt="" />
            </NavLink>
        </div>
        <div className="flex gap-6 ">
            <NavLink to='/go' className="text-lg font-semibold " >
                Games
            </NavLink>
            <NavLink to='/about' className="text-lg font-semibold " >
                About
            </NavLink>
            <NavLink to='/contact' className="text-lg font-semibold " >
                Contact
            </NavLink>
        </div>
    </nav>
    </>
  )
}

export default Navbar