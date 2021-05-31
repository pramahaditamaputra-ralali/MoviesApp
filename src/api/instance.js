import axios from 'axios';

/**
 * return response from API
 */
interface Response {
  success: boolean;
  data: [],
  message: string
}

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/4/',
  timeout: 1000,
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjQ2ZDY2NWFlMjhkYmRjZWVjMmUxMTFmNWE2Mjc0YiIsInN1YiI6IjYwYjA2N2E4OGVlNDljMDA2ZGM0NTljOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cRcZMOLr60_ud92cFPt-qxz8tVcdDYu7PET5Glu4xSE',
  },
});

instance.response.use((response) => {
  const { status, data } = response;

  const getStatusHttpOk = (status, data) => {
    return status === 'success' && (data !== null || data !== 'undefined')
  }

  const getClientData = (data) => {
    return data === 'undefined' ? null : data
  }

  return {
    ok: getStatusHttpOk(status, data),
    data: getClientData(data)
  }
});

/**
 * effect
 * @param data
 */
export const getMovieList = async (params) => {
  const response = await instance.get(`list/${params}`);

  const { data } = response;

  const { results } = data;

  const modifyResults = {
    original_title: `AG_${results?.original_title}`,
    ...results
  }

  return {
    ...response,
    data: {
      results,
      ...modifyResults
    }
  }
}

export default instance;
