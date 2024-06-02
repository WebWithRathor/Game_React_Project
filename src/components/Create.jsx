import React, { useContext, useState } from 'react'
import { gamescontext } from '../contexts/GamesContext'

const Create = () => {
    const [Games,setGames] = useContext(gamescontext)
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [title, settitle] = useState('')
    const [Genre, setGenre] = useState('')
    const [storyline, setstoryline] = useState('')
    const [characters, setcharacters] = useState('')

    const SubmitHandler = (e) => {
        e.preventDefault()
        const newGame = {image, description, title, Genre, storyline, characters};
        setGames([...Games,newGame]);
        setimage('');
        setGenre('');
        setdescription('');
        setcharacters('');
        setstoryline('');
        settitle('');
    }
    console.log(Games);
    return (
        <>
            <form onSubmit={SubmitHandler} className='px-16 py-8 '>
                <h1 className='text-5xl warfare mb-5'>Add <span className='text-[#8d1bb5]'>Game</span></h1>
                <input onChange={(e) => setimage(e.target.value)} value={image} type="url" className="w-full border  focus:ring-4 shadow shadow-[#8d1bb5] focus:ring-[#8d1bb5]   rounded-md bg-transparent px-3 py-4 text-white text-lg mb-5" placeholder="Game Image URL" />
                <input onChange={(e) => settitle(e.target.value)} value={title} type="text" className="w-full border  focus:ring-4 shadow shadow-[#8d1bb5] focus:ring-[#8d1bb5]   rounded-md bg-transparent px-3 py-4 text-white text-lg mb-5" placeholder="Title" />
                <input onChange={(e) => setGenre(e.target.value)} value={Genre} type="text" className="w-full border  focus:ring-4 shadow shadow-[#8d1bb5] focus:ring-[#8d1bb5]   rounded-md bg-transparent px-3 py-4 text-white text-lg mb-5" placeholder="Genre (seprate it by , )" />
                <input onChange={(e) => setstoryline(e.target.value)} value={storyline} type="text" className="w-full border  focus:ring-4 shadow shadow-[#8d1bb5] focus:ring-[#8d1bb5]   rounded-md bg-transparent px-3 py-4 text-white text-lg mb-5" placeholder="Story line" />
                <input onChange={(e) => setcharacters(e.target.value)} value={characters} type="text" className="w-full border  focus:ring-4 shadow shadow-[#8d1bb5] focus:ring-[#8d1bb5]   rounded-md bg-transparent px-3 py-4 text-white text-lg mb-5" placeholder="Characters (seprate it by , )" />
                <textarea onChange={(e) => setdescription(e.target.value)} value={description} type="text" className="w-full border  focus:ring-4 shadow shadow-[#8d1bb5] focus:ring-[#8d1bb5]   rounded-md bg-transparent px-3 py-4 text-white text-lg mb-5" placeholder="Game Description" ></textarea>
                <button className='mt-2 px-4  font-semibold py-2 bg-[#8d1bb5]   rounded text-lg text-white'>Upload Game </button>
            </form>
        </>
    )
}

export default Create