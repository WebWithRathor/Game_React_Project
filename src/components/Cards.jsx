import React from 'react'

const Cards = () => {
  return (
    <>
    <div className="card  w-[23.5%] p-4 py-5 rounded shadow shadow-[rgba(255,255,255,.2)] ">
        <img src="" className='h-[40vh] w-full bg-green-500 mb-2' alt="" />
        <h1 className='font-semibold text-lg text-2xl '>GAme NAme</h1>
        <p className='tracking-tight text-sm mb-4 mt-2'>Lorem ipsum dolor sit amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, quibusdam. Lorem ipsum dolor sit amet.</p>
        <div className="buttons flex gap-4">
            <button className='w-1/2 py-2 text-md text-[#8d1bb5] shadow-inner shadow-[#8d1bb57a] font-semibold border-2 hover:bg-[#8d1bb5] hover:text-white transition-all border-[#8d1bb5] rounded'>Update</button>
            <button className='w-1/2 py-2 text-md text-[#8d1bb5] shadow-inner shadow-[#8c1bb57a] font-semibold border-2 hover:bg-[#8d1bb5] hover:text-white transition-all border-[#8d1bb5] rounded'>Delete</button>
        </div>
    </div>
    </>
  )
}

export default Cards