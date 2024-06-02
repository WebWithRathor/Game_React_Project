import React, { createContext, useState } from 'react'

export const gamescontext = createContext(null);

const GamesContext = (props) => {
    const [Games, setGames] = useState([])
    return (
        <gamescontext.Provider value={[Games, setGames]}>
            {props.children}
        </gamescontext.Provider>
    )
}

export default GamesContext