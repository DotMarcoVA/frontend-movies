import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieService from "./movieService";

const initialState = {
    movies: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

// Añadir Pelicula
export const createMovie = createAsyncThunk("movies/create", async(movieData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await movieService.createMovie(movieData, token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})