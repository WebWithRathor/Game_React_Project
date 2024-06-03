import React, { useContext } from 'react'
import { gamescontext } from '../contexts/GamesContext';
import { useParams,NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Details = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const [Games,setGames] = useContext(gamescontext);
    const { title, image, description, rating, Genre, characters, storyline } = Games.find(game => game.id === id);
    
    const DeleteHandler = () => {
        const newGames = Games.filter(game => game.id!== id);
        setGames(newGames);
        localStorage.setItem('Games', JSON.stringify(newGames));
        toast.error("Deleted Successfully")
        navigate('/')
    }

    return (
        <div className="details h-full flex flex-col md:flex-row px-6 md:px-16 gap-10 py-5 md:pt-8 items-center">
            <div className="left w-full md:w-1/2 space-y-3.5">
                <h1 className="text-4xl font-semibold warfare">{title}</h1>
                <div className="image w-full h-[50vh] rounded overflow-hidden">
                    <img className='w-full h-full object-cover' src={image} alt="" />
                </div>
                <h1>Rating :
                    {Array.from({ length: 5 }, (op, index) => (
                        <i key={index}  className={index >= rating ? "ri-star-line" : "ri-star-fill text-yellow-500"}></i>
                    ))}
                </h1>
                <div className="buttons flex gap-4">
                  <NavLink className='w-1/2' to={`/update/${id}`}><button className='w-full py-2 text-md text-[#8d1bb5] shadow-inner shadow-[#8d1bb57a] font-semibold hover:bg-[#8d1bb5] hover:text-white transition-all border-[#8d1bb5] bg-white rounded'> <i className="ri-edit-line"></i> Update</button></NavLink>
                  <button onClick={DeleteHandler} className='w-1/2 py-2 text-md text-[#8d1bb5] shadow-inner shadow-[#8c1bb57a] font-semibold hover:bg-[#8d1bb5] hover:text-white transition-all border-[#8d1bb5] bg-white rounded'> <i className="ri-delete-bin-2-line"></i> Delete</button>
                </div>
            </div>
            <div className="right w-full md:w-1/2">
                <h1 className='text-2xl font-semibold mb-3'>Genre</h1>
                <ul className='pl-7 list-disc'>
                    {Genre.split(',').map((e,i)=>{
                        return <li key={i+1}>{e}</li>
                    })}
                </ul>
                <h1 className='text-2xl font-semibold mt-5 mb-3'>Characters</h1>
                <ul className='pl-7 list-disc'>
                {characters.split(',').map((e,i)=>{
                        return <li key={i+1}>{e}</li>
                    })}
                </ul>
                <h1 className='text-2xl font-semibold mt-5 mb-3'>Story Line</h1>
                <p>{storyline}</p>
                <h1 className='text-2xl font-semibold mt-5 mb-3'>Description</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Details