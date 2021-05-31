import instance, { getMovieList } from './../api/instance';

export const movies = {
  state: {
    fetching: null,
    payload: null,
    error: null,
    message: null,
    data: {
      page: 0
    }
  },
  reducers: {
    SET_MOVIES: (prevState, { payload, message = null } = {}) => ({
      ...prevState,
      payload,
      message,
      fetcing: false,
      error: false
    }),
    SET_INCREMENT_PAGE: (prevState, payload) => {
      return {...prevState, page: (prevState.page += payload)};
    },
    SET_RESET_PAGE: (prevState, payload) => {
      return {movies: [], page: payload};
    },
    SET_MOVIE_REQUEST: (prevState) => ({
      ...prevState,
      fetching: true,
      error: null,
      message: null
    }),
    SET_MOVIE_FAILURE: (prevState, { message = null} = {}) => ({
      ...prevState,
      fetching: false,
      error: true,
      message: null
    }),
  },
  effects: dispatch => ({
    async getMovies(page) {
      dispatch.movies.SET_MOVIE_REQUEST();

      const response = await getMovieList(page);

      if (response.ok) {
        dispatch.movies.SET_INCREMENT_PAGE(1);
        dispatch.movies.SET_MOVIES({
          payload: search(data?.results) ?? []
        });
      } else {
          dispatch.movies.SET_MOVIE_FAILURE();
      }
  })
};

function search(data) {
  // return response with business logic
}

function makeCar() {
  const vehicle = null
  const door = null
  const color = null

  const makeDoor = () => {
    return 'a car have plain door'
  }

  const makeColor = () => {
    return 'a car have blue color'
  }

  return {
    vehicle: makeVehicle(),
    door: makeDoor(),
    color: makeColor()
  }
}
