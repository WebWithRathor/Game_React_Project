import React from 'react'
import { NavLink } from 'react-router-dom'
import GameController from '../assets/pngimg.com - gamepad_PNG60.png'

const Home = () => {

  return (
    <>
      <NavLink to='/AddGame'>
        <div className="button bottom-24 md:bottom-16 right-8 fixed group flex items-center justify-end w-[10vw]">

        <button className='h-12 w-[33vw] md:w-12 hover:w-[10vw] flex items-center justify-center transition-all absolute font-semibold bg-[#8d1bb5] shadow-[0_0px_20px_1px_#8d1bb5] rounded-full text-white'>
          <i className='ri-add-line text-2xl hidden md:inline group-hover:hidden'></i>
        </button>
          <h1 className='absolute md:hidden w-max group-hover:inline-block pointer-events-none right-4 md:right-0 md:left-8 font-semibold'>Add Game <i className='ri-add-line'></i></h1>
        </div>
      </NavLink>
      <div className="poster h-max flex md:flex-row flex-col-reverse px-7 md:px-14 md:py-5  md:h-[60vh]  text-white">
        <div className="poster-headings w-full md:w-1/2 h-max shrink-0 md:pt-12">
          <h1 className='text-2xl md:text-5xl font-semibold leading-8'>Discover the Ultimate Resource,</h1>
          <h1 className='text-6xl font-semibold mt-2 '>for <span className='warfare drop-shadow-[0px_0px_5px_rgba(141,27,181,.7)] text-[rgb(141,27,181)] font-bold uppercase'>Game</span> enthusiasts</h1>
          <p className='mb-5 mt-4 text-sm md:text-md md:w-[85%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aspernatur vero quia consectetur nulla cupiditate, ducimus odit quos natus labore magnam pariatur, minima exercitationem eligendi laboriosam illo. Velit, ipsam saepe?</p>
          <NavLink to='/games'><button className='mt-2 px-6  font-semibold py-3 bg-[#8d1bb5] shadow-[0_0px_15px_1px_#8d1bb5]  rounded text-lg text-white hover:bg-white hover:text-[#8d1bb5] transition-all '>Get Started <i className="ri-arrow-right-line"></i></button></NavLink>

        </div>
        <img src={GameController} alt="" className='md:ml-auto  md:w-[37%] w-full  hue-rotate-[110deg]  object-cover -rotate-6' />
      </div>
    </>
  )
}

export default Home