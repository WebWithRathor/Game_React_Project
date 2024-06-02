import React from 'react'
import { NavLink } from 'react-router-dom'

const Cards = () => {
  return (
    <>
    <div className="card  w-[23.5%] p-4 rounded bg-white text-black ">
    <NavLink to="/game/1" >
        <img src="" className='h-[40vh] w-full bg-green-500 mb-2 rounded' alt="" />
        <h1 className='font-semibold text-lg text-2xl '>GAme NAme</h1>
        <p className='tracking-tight text-sm font-medium mb-4 '>Lorem ipsum dolor sit amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, quibusdam. Lorem ipsum dolor sit amet.</p>
        </NavLink>
        <div className="buttons flex gap-4">
            <button className='w-1/2 py-2 text-md text-[#8d1bb5] shadow-inner shadow-[#8d1bb57a] font-semibold border-2 hover:bg-[#8d1bb5] hover:text-white transition-all border-[#8d1bb5] rounded'> <i className="ri-thumb-up-line"></i> Like</button>
            <button className='w-1/2 py-2 text-md text-[#8d1bb5] shadow-inner shadow-[#8c1bb57a] font-semibold border-2 hover:bg-[#8d1bb5] hover:text-white transition-all border-[#8d1bb5] rounded'> <i className="ri-bookmark-line"></i> Save</button>
        </div>
    </div>
    </>
  )
}

export default Cards