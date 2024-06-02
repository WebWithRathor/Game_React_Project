import React from 'react'

const Details = () => {
    return (
        <div className="details h-full flex px-16 gap-10 pt-8 items-center">
            <div className="left w-1/2 space-y-3.5">
                <h1 className="text-4xl font-semibold warfare">Game Name</h1>
                <div className="image w-full h-[50vh] rounded overflow-hidden">
                    <img className='w-full ' src="https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-hub-thumbnail-ghost-of-sparta-en-29jul21?$1600px$" alt="" />
                </div>
                <h1>Rating : <i className="ri-star-line"></i><i className="ri-star-line"></i><i className="ri-star-line"></i><i className="ri-star-line"></i></h1>
                <div className="buttons flex gap-4">
                    <button className='w-1/2 py-2 text-md text-[#8d1bb5] shadow-inner shadow-[#8d1bb57a] font-semibold hover:bg-[#8d1bb5] hover:text-white transition-all border-[#8d1bb5] bg-white rounded'> <i className="ri-edit-line"></i> Update</button>
                    <button className='w-1/2 py-2 text-md text-[#8d1bb5] shadow-inner shadow-[#8c1bb57a] font-semibold hover:bg-[#8d1bb5] hover:text-white transition-all border-[#8d1bb5] bg-white rounded'> <i className="ri-delete-bin-2-line"></i> Delete</button>
                </div>
            </div>
            <div className="right w-1/2">
                <h1 className='text-2xl font-semibold mb-3'>Genre</h1>
                <ul className='pl-7 list-disc'>
                    <li>Action</li>
                </ul>
                <h1 className='text-2xl font-semibold mt-5 mb-3'>Characters</h1>
                <ul className='pl-7 list-disc'>
                    <li>Action</li>
                </ul>
                <h1 className='text-2xl font-semibold mt-5 mb-3'>Story Line</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, officiis voluptatibus quia doloribus veritatis et enim consectetur nesciunt tenetur sequi?</p>
                <h1 className='text-2xl font-semibold mt-5 mb-3'>Description</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, officiis voluptatibus quia doloribus veritatis et enim consectetur nesciunt tenetur sequi?</p>
            </div>
        </div>
    )
}

export default Details