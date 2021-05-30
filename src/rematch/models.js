import instance from './../api/instance';

export const movies = {
  state: {movies: [], page: 1},
  reducers: {
    SET_MOVIES: (state, payload) => {
      return {...state, movies: [...state.movies, ...payload]};
    },
    SET_INCREMENT_PAGE: (state, payload) => {
      return {...state, page: (state.page += payload)};
    },
    SET_RESET_PAGE: (state, payload) => {
      return {movies: [], page: payload};
    },
  },
  effects: dispatch => ({
    async getMovies(page) {
      try {
        const response = await instance.get(`list/${page}`);
        dispatch.movies.SET_INCREMENT_PAGE(1);
        dispatch.movies.SET_MOVIES(response.data.results);
      } catch (error) {
        console.error(error);
      }
    },
  }),
};
