import React, { useContext } from 'react'
import Cards from './Cards'
import { gamescontext } from '../contexts/GamesContext';
import Footer from './Footer';
const Games = () => {
    const [Games] = useContext(gamescontext);

    return (
        <>
            <h1 className='text-6xl warfare text-center font-semibold mt-10 mb-5'>Our <span className='text-[#8d1bb5]'>Games</span></h1>
            <div className="games w-full grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 p-10 gap-5">
                {Games.length === 0 ?
                    <h1 key={"null"} className='text-3xl font-semibold col-span-full text-center warfare text-red-300'>No Games Found !</h1>
                    : Games.map(game => <Cards key={game.id} title={game.title} description={game.description} image={game.image} id={game.id} />)}

            </div>
            <Footer/>
        </>
    )
}

export default Games