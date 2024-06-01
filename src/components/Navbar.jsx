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
            <NavLink to='/go' className="text-lg font-semibold after:h-[2.5px] after:origin-left after:w-full relative after:left-0 after:top-full after:absolute after:scale-x-0  after:transition-transform after:rounded after:shadow-[0_0px_20px_1px_#8d1bb5] after:hover:scale-x-100 after:bg-[#8d1bb5]" >
                Games
            </NavLink>
            <NavLink to='/about' className="text-lg font-semibold after:h-[2.5px] after:origin-left after:w-full relative after:left-0 after:top-full after:absolute after:scale-x-0  after:transition-transform after:rounded after:shadow-[0_0px_20px_1px_#8d1bb5] after:hover:scale-x-100 after:bg-[#8d1bb5]" >
                About
            </NavLink>
            <NavLink to='/contact' className="text-lg font-semibold after:h-[2.5px] after:origin-left after:w-full relative after:left-0 after:top-full after:absolute after:scale-x-0  after:transition-transform after:rounded after:shadow-[0_0px_20px_1px_#8d1bb5] after:hover:scale-x-100 after:bg-[#8d1bb5]" >
                Contact
            </NavLink>
        </div>
    </nav>
    </>
  )
}

export default Navbar