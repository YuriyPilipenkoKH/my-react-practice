import axios from "axios";
import Notiflix from "notiflix";

const KEY = '178f7f77d46b35123e714d6df55184fe'
const BASE_URL = `https://api.themoviedb.org/3/`;


export const searchMovies = async (query) =>  {
   
    try {
        const data =   await axios.get(`${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${query}`)

        const {results} = data.data

        if (results.length === 0) {
            Notiflix.Notify.failure(`Nothing was found.`);
         }
        return results
    } catch (error) {
        console.log(error);
    }
}

export const fetchTrendingMovies = async (page) =>  {
    try {

      const data =  await axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY}&page=${page}`)

      return  data.data

    } catch (error) {
      console.log(error);
    }
    return 
}

export const fetchMovieById = async (id) =>  {
    try {

      const data =  await axios.get(`${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`)

    
      return data.data
    } catch (error) {    
      console.log(error);
    }
    return 
}

export const getCast = async (id) =>  {
    try {

      const data =  await axios.get(`${BASE_URL}movie/${id}/credits?api_key=${KEY}&language=en-US`)
     
      
      return data.data.cast
    } catch (error) {
      console.log(error);
    }
    return 
}
export const getReviews = async (id) =>  {
    try {

      const data =  await axios.get(`${BASE_URL}movie/${id}/reviews?api_key=${KEY}&language=en-US`)
     
      
      return data.data.results
    } catch (error) {
      console.log(error);
    }
    return 
}
