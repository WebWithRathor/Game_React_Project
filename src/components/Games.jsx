import React from 'react'
import Cards from './Cards'
const Games = () => {
    return (
        <>
            <h1 className='text-6xl warfare text-center font-semibold mt-10 mb-5'>Our <span className='text-[#8d1bb5]'>Games</span></h1>
            <div className="games w-full flex flex-wrap justify-between p-10 gap-5">
              <Cards />
            </div>
        </>
    )
}

export default Games