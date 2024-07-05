import React from 'react'
import Cards from './Cards'
import { useSelector } from 'react-redux';
const Games = ({mt}) => {
    const {Games} = useSelector(state=>state.gameSlice);

    return (
        <>
            <h1 className={`text-[10vw] md:text-6xl warfare text-center font-semibold mt-${mt}  md:mt-3 mb-5`}>Our <span className='text-[#8d1bb5]'>Games</span></h1>
            <div className="games w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 px-5 md:px-8 pb-10 md:p-10 gap-5">
                {Games.length === 0 ?
                    <h1 key={"null"} className='text-3xl font-semibold col-span-full text-center warfare text-red-300'>No Games Found !</h1>
                    : Games.map(game => <Cards key={game.id} title={game.title} description={game.description} image={game.image} id={game.id} />)}

            </div>
        </>
    )
}

export default Games