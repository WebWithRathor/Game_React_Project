import { createSlice } from "@reduxjs/toolkit";

const gameSlice =  createSlice({
    name: "games",
    initialState: {
        Games: JSON.parse(localStorage.getItem("Games"))?? []
    },
    reducers: {
        addGame: (state, action) => {
            state.Games.push(action.payload)
        },
        deleteGame: (state, action) => {
            state.Games = action.payload
        },
        updateGame: (state, action) => {
            state.Games = action.payload
        }
    }
})

export default gameSlice.reducer;
export const {addGame,deleteGame,updateGame} = gameSlice.actions;