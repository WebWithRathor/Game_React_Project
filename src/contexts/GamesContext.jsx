import React, { createContext, useState } from 'react'

export const gamescontext = createContext(null);

const GamesContext = (props) => {
    const [Games, setGames] = useState(JSON.parse(localStorage.getItem("Games")) ?? [])
    return (
        <gamescontext.Provider value={[Games, setGames]}>
            {props.children}
        </gamescontext.Provider>
    )
}

export default GamesContext