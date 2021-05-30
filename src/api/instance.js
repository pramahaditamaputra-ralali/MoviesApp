import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/4/',
  timeout: 1000,
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjQ2ZDY2NWFlMjhkYmRjZWVjMmUxMTFmNWE2Mjc0YiIsInN1YiI6IjYwYjA2N2E4OGVlNDljMDA2ZGM0NTljOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cRcZMOLr60_ud92cFPt-qxz8tVcdDYu7PET5Glu4xSE',
  },
});

export default instance;
