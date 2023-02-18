import {
  GET_CHARACTERS,
  GET_CHARACTER_DETAIL,
  ADD_FAVORITE,
  DELETE_FAVORITE,
  GET_FAVORITES,
} from "../actions";

const initialState = {
  characters: [],
  characterDetail: {},
  favorites: [],
};

const createRoot = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CHARACTERS:
      return {
        ...state,
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, payload],
      };
    case GET_CHARACTER_DETAIL:
      return {
        ...state,
        characterDetail: payload,
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((el) => el.id !== payload.id),
      };

    default:
      return {
        ...state,
      };
  }
};
