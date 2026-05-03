import axios from "axios";
import {
  GET_GAMES,
  GET_GAMES_DETAIL,
  GET_GAMES_NAME,
  FILTER_GAMES_GENRES,
  FILTER_GAMES_CREATE,
  ORDER_GAMES_NAME,
  ORDER_GAMES_RATING,
  RESET_PAGED,
  CLEAN_STATE,
  GET_GAMES_ERROR,
} from "./action-types";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

export const getGames = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${API_URL}/videogames`);
      return dispatch({ type: GET_GAMES, payload: response.data });
    } catch (error) {
      return dispatch({ type: GET_GAMES_ERROR });
    }
  };
};

export const getGamesDetail = (id) => {
  return function (dispatch) {
    fetch(`${API_URL}/videogames/${id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_GAMES_DETAIL, payload: data }));
  };
};

export const getGamesName = (name) => {
  return function (dispatch) {
    fetch(`${API_URL}/videogames?name=${name}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_GAMES_NAME, payload: data }));
  };
};

export const filterGamesByGenres = (payload) => {
  return function (dispatch) {
    dispatch({ type: FILTER_GAMES_GENRES, payload });
  };
};

export const filterGamesByCreate = (payload) => {
  return function (dispatch) {
    dispatch({ type: FILTER_GAMES_CREATE, payload });
  };
};

export const orderGamesByName = (payload) => {
  return function (dispatch) {
    dispatch({ type: ORDER_GAMES_NAME, payload });
  };
};

export const orderGamesByRating = (payload) => {
  return function (dispatch) {
    dispatch({ type: ORDER_GAMES_RATING, payload });
  };
};

export const resedPaged = (payload) => {
  return function (dispatch) {
    dispatch({ type: RESET_PAGED, payload });
  };
};

export const cleanState = (payload) => {
  return function (dispatch) {
    dispatch({ type: CLEAN_STATE, payload: [] });
  };
};
