import React from 'react'
import { NavLink } from 'react-router-dom'

const Cards = (props) => {
  const { title, description, image, id } = props;
  return (
    <>
      <div className="card p-4 rounded bg-gradient-to-b from-[#8d1bb5] to-60% to-gray-600 text-white ">
        <NavLink to={`/game/${id}`} >
          <img src={image} className='h-[40vh] w-full mb-2 rounded object-cover' alt="" />
          <h1 className='font-semibold text-2xl mb-1 warfare'>{title}</h1>
          <p className='tracking-tight text-sm leading-5'>{description.length > 100 ? description.slice(0, 100) + "..." : "***No Description***"}</p>
        </NavLink>
      </div>
    </>
  )
}

export default Cards