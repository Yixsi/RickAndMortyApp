import axios from 'axios'
import {
  GET_CHARACTERS,
  GET_CHARACTER_DETAIL,
  ADD_FAVORITE,
  DELETE_FAVORITE,
  GET_FAVORITES,
} from "../actions";

const getCharacters = () =>{
    return async (dispatch) =>{
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character/"
        );
        return dispatch({
            type: GET_CHARACTERS,
            payload: response.data.results
        })
    }
}

const getCharacterDetail = (id) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    return dispatch({
      type: GET_CHARACTER_DETAIL,
      payload: response.data
    });
  };
};

const addFavorite = (favorite) =>{
    return{
        type: ADD_FAVORITE,
        payload: favorite
    }
}

const deleteFavorite = (id) =>{
    return{
        type: DELETE_FAVORITE,
        payload: id
    }
}