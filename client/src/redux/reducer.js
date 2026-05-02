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
} from "./action-types";

const initialState = {
  games: [],
  backupGames: [],
  gamesDetail: [],
  sortGames: [],
  currentPage: 1,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        games: action.payload,
        backupGames: action.payload,
        sortGames: action.payload,
      };

    case GET_GAMES_DETAIL:
      return {
        ...state,
        gamesDetail: action.payload,
      };

    case GET_GAMES_NAME:
      return {
        ...state,
        games: action.payload,
      };

    case FILTER_GAMES_GENRES:
      let allGames = state.backupGames;
      let filterGames =
        action.payload === "All Genres"
          ? allGames
          : allGames.filter((element) =>
              element.genres.includes(action.payload)
            );
      return {
        ...state,
        games: filterGames,
      };

    case FILTER_GAMES_CREATE:
      let backup = state.backupGames;
      let filterCreate =
        action.payload === "Bdd"
          ? backup.filter((element) => element.created)
          : backup.filter((element) => !element.created);
      return {
        ...state,
        games:
          action.payload === "All Games" ? state.backupGames : filterCreate,
      };

    case ORDER_GAMES_NAME:
      let sortGamesName =
        action.payload === "asc"
          ? state.sortGames.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.sortGames.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        sortGames: sortGamesName,
      };

    case ORDER_GAMES_RATING:
      let orderRating =
        action.payload === "less"
          ? state.sortGames.sort(function (a, b) {
              if (a.rating > b.rating) {
                return 1;
              }
              if (b.rating > a.rating) {
                return -1;
              }
              return 0;
            })
          : state.sortGames.sort(function (a, b) {
              if (a.rating > b.rating) {
                return -1;
              }
              if (b.rating > a.rating) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        games: orderRating,
      };

    case RESET_PAGED:
      return {
        ...state,
        currentPage: action.payload,
      };

    case CLEAN_STATE:
      return {
        ...state,
        gamesDetail: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
