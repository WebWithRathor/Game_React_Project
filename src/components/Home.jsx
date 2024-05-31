import React from 'react'
import { NavLink } from 'react-router-dom'
import GameController from '../assets/pngimg.com - gamepad_PNG60.png'

const Home = () => {
  return (
    <>
    <NavLink to='/AddGame'><button className='px-4 bottom-10 right-10 absolute font-semibold py-2 bg-[#8d1bb5] shadow-inner shadow-violet-200 rounded text-white'>Add Game+</button></NavLink>
    <div className="poster flex px-14 py-5 h-[60vh] bg-red-500 text-white">
    </div>
    </>
  )
}

export default Home