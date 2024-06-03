import React, { useContext, useState } from 'react'
import { gamescontext } from '../contexts/GamesContext'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const [Games, setGames] = useContext(gamescontext)
    const game = Games.find(game => game.id === id);
    const [image, setimage] = useState(game.image)
    const [description, setdescription] = useState(game.description)
    const [title, settitle] = useState(game.title)
    const [Genre, setGenre] = useState(game.Genre)
    const [storyline, setstoryline] = useState(game.storyline)
    const [characters, setcharacters] = useState(game.characters)
    const [rating, setrating] = useState(game.rating)
    const SubmitHandler = (e) => {
        e.preventDefault()
        const newGame = { id:game.id, image, description, title, Genre, storyline, characters,rating };
        Games[Games.findIndex((games) => games.id == id)] = newGame;
        localStorage.setItem('Games', JSON.stringify([...Games]));
        setimage('');
        setGenre('');
        setdescription('');
        setcharacters('');
        setstoryline('');
        settitle('');
        setrating("3");
        navigate(`/game/${newGame.id}`)
    }
    return (
        <>
            <form onSubmit={SubmitHandler} className='px-16 py-8 '>
                <h1 className='text-5xl warfare mb-5'>Add <span className='text-[#8d1bb5]'>Game</span></h1>
                <input onChange={(e) => setimage(e.target.value)} value={image} type="url" className="w-full border  focus:ring-4 shadow shadow-[#8d1bb5] focus:ring-[#8d1bb5]   rounded-md bg-transparent px-3 py-4 text-white text-lg mb-5" placeholder="Game Image URL" />
                <input onChange={(e) => settitle(e.target.value)} value={title} type="text" className="w-full border  focus:ring-4 shadow shadow-[#8d1bb5] focus:ring-[#8d1bb5]   rounded-md bg-transparent px-3 py-4 text-white text-lg mb-5" placeholder="Title" />
                <input onChange={(e) => setGenre(e.target.value)} value={Genre} type="text" className="w-full border  focus:ring-4 shadow shadow-[#8d1bb5] focus:ring-[#8d1bb5]   rounded-md bg-transparent px-3 py-4 text-white text-lg mb-5" placeholder="Genre (seprate it by , )" />
                <input onChange={(e) => setstoryline(e.target.value)} value={storyline} type="text" className="w-full border  focus:ring-4 shadow shadow-[#8d1bb5] focus:ring-[#8d1bb5]   rounded-md bg-transparent px-3 py-4 text-white text-lg mb-5" placeholder="Story line" />
                <input onChange={(e) => setcharacters(e.target.value)} value={characters} type="text" className="w-full border  focus:ring-4 shadow shadow-[#8d1bb5] focus:ring-[#8d1bb5]   rounded-md bg-transparent px-3 py-4 text-white text-lg mb-5" placeholder="Characters (seprate it by , )" />
                <select  value={rating} onChange={e=>setrating(e.target.value)} className='w-full border  focus:ring-4 shadow shadow-[#8d1bb5] focus:ring-[#8d1bb5]   rounded-md bg-transparent px-3 py-4 text-white text-lg mb-5'>
                    <option className="text-[#8d1bb5] bg-gray-400 p-2 " value="3" >3 Star</option>
                    <option className="text-[#8d1bb5] bg-gray-400 p-2 " value="4" >4 Star</option>
                    <option className="text-[#8d1bb5] bg-gray-400 p-2 " value="5" >5 Star</option>
                </select>
                <textarea onChange={(e) => setdescription(e.target.value)} value={description} type="text" className="w-full border  focus:ring-4 shadow shadow-[#8d1bb5] focus:ring-[#8d1bb5]   rounded-md bg-transparent px-3 py-4 text-white text-lg mb-5" placeholder="Game Description" ></textarea>
                <button className='mt-2 px-4  font-semibold py-2 bg-[#8d1bb5]   rounded text-lg text-white'>Upload Game </button>
            </form>
        </>
    )
}

export default Update