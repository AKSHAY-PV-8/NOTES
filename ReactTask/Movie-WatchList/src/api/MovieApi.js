import axios from "axios"

export async function getMovies(movie){
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${movie}`)
    return res.data
}

