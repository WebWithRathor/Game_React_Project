import { addGame, updateGame, deleteGame } from "../reducers/gameSlice";

export const addgame = (game) => (dispatch, getState) => {
    dispatch(addGame(game))
    console.log(getState().gameSlice.Games);
    localStorage.setItem('Games', JSON.stringify(getState().gameSlice.Games));
};

export const updategame = (updateGames) => (dispatch, getState) => {
    let game = [...getState().gameSlice.Games]
    game[game.findIndex(game => game.id === updateGames.id)] = updateGames
    localStorage.setItem('Games', JSON.stringify(game));
    dispatch(updateGame(game));
};

export const deletegame = (deleteId) => (dispatch, getState) => {
    let game = [...getState().gameSlice.Games]
    game = game.filter(game => game.id != deleteId);
    localStorage.setItem('Games', JSON.stringify(game));
    dispatch(deleteGame(game));
};