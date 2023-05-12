import axios from "axios"

const API_URL = "https://red-beautiful-lobster.cyclic.app/api/movies"
// const API_URL = "http://localhost:5000/api/movies"
// Añadir Pelicula
const createMovie = async (movieData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
    const response = await axios.post(API_URL, movieData, config)
    return response.data;
};

// Get Peliculas
const getMovies = async(token)=> {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
    const response = await axios.get(API_URL, config)
    return response.data;
}

// Eliminar Pelicula 
const deleteMovie = async(id,token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.delete(`${API_URL}/${id}`, config);
    return response;
}

// Acutalizar Pelicula
const updateMovie = async(id, movieData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.put(`${API_URL}/${id}`, movieData, config);
    return response;
}
const movieService = {
    createMovie,
    getMovies,
    deleteMovie,
    updateMovie
}

export default movieService