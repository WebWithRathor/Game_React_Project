import React, { useContext, useState } from 'react'
import { gamescontext } from '../contexts/GamesContext'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

const Create = () => {

    
    const navigate = useNavigate();
    const [Games, setGames] = useContext(gamescontext)
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [title, settitle] = useState('')
    const [Genre, setGenre] = useState('')
    const [storyline, setstoryline] = useState('')
    const [characters, setcharacters] = useState('')
    const [rating, setrating] = useState("3")

    const SubmitHandler = (e) => {
        e.preventDefault()
        const newGame = { id:nanoid(), image, description, title, Genre, storyline, characters,rating };
        setGames([...Games, newGame]);
        localStorage.setItem('Games', JSON.stringify([...Games, newGame]));
        toast.success("Created Successfully");
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
                <select value={rating} onChange={e=>setrating(e.target.value)} className='w-full border  focus:ring-4 shadow shadow-[#8d1bb5] focus:ring-[#8d1bb5]   rounded-md bg-transparent px-3 py-4 text-white text-lg mb-5'>
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

export default Create