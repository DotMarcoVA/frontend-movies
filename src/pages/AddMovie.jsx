import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createMovie, reset } from "../features/movies/movieSlice";

const AddMovie = () => {
    const actualUser = localStorage.getItem("user");

    const [formData, setFormData] = useState({
        title: "",
        overview: "",
        genre: [],
        poster_path: "",
        trailer_path: "",
        release_date: "",
        votes: "",
    });

    const {
        title,
        overview,
        genre,
        poster_path,
        trailer_path,
        release_date,
        votes,
    } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);
    const { movies, isLoading, isSuccess, isError, message } = useSelector(
        (state) => state.movie
    );

    /* useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        if (!actualUser.isAdmin) {
            navigate("/");
        }
        if (!user) {
            navigate("/");
        }
        if (isSuccess) {
            navigate("/dashboard");
        }
        dispatch(reset());
    }, [
        user,
        actualUser.isAdmin,
        navigate,
        dispatch,
        isError,
        message,
        isSuccess,
    ]); */

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (
            !title ||
            !overview ||
            !genre ||
            !poster_path ||
            !release_date ||
            !votes
        ) {
            toast.error(
                "Verifique todos los campos estan completos para continuar"
            );
        } else {
            const movieData = {
                title,
                overview,
                genre,
                poster_path,
                trailer_path,
                release_date,
                votes,
            };
            dispatch(createMovie(movieData));
            navigate("/dashboard");
        }
    };

    return (
        <>
            <form className="box p-6 m-6" onSubmit={onSubmit}>
                <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            name="title"
                            id="title"
                            value={title}
                            placeholder="Pirates of the Caribbean"
                            onChange={onChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Overview</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            name="overview"
                            id="overview"
                            value={overview}
                            placeholder="Long time ago..."
                            onChange={onChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label htmlFor="" className="label">
                        Genres
                    </label>
                    <div className="select">
                        <select id="genre" name="genre" onChange={onChange}>
                            <option value="">None</option>
                            <option value="28">Action</option>
                            <option value="12">Adventure</option>
                            <option value="16">Animation</option>
                            <option value="35">Comedy</option>
                            <option value="80">Crime</option>
                            <option value="99">Documentary</option>
                            <option value="18">Drama</option>
                            <option value="10751">Family</option>
                            <option value="14">Fantasy</option>
                            <option value="36">History</option>
                            <option value="27">Horror</option>
                            <option value="10402">Music</option>
                            <option value="9648">Mystery</option>
                            <option value="10749">Romance</option>
                            <option value="878">Science Fiction</option>
                            <option value="10770">TV Movie</option>
                            <option value="53">Thriller</option>
                            <option value="10752">War</option>
                            <option value="37">Western</option>
                        </select>
                    </div>

                    <div className="select">
                        <select id="genre" name="genre" onChange={onChange}>
                            <option value="">None</option>
                            <option value="28">Action</option>
                            <option value="12">Adventure</option>
                            <option value="16">Animation</option>
                            <option value="35">Comedy</option>
                            <option value="80">Crime</option>
                            <option value="99">Documentary</option>
                            <option value="18">Drama</option>
                            <option value="10751">Family</option>
                            <option value="14">Fantasy</option>
                            <option value="36">History</option>
                            <option value="27">Horror</option>
                            <option value="10402">Music</option>
                            <option value="9648">Mystery</option>
                            <option value="10749">Romance</option>
                            <option value="878">Science Fiction</option>
                            <option value="10770">TV Movie</option>
                            <option value="53">Thriller</option>
                            <option value="10752">War</option>
                            <option value="37">Western</option>
                        </select>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Poster Path</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            name="poster_path"
                            id="poster_path"
                            value={poster_path}
                            placeholder="/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg"
                            onChange={onChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Trailer Path</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            name="trailer_path"
                            id="trailer_path"
                            value={trailer_path}
                            placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            onChange={onChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Release Date</label>
                    <div className="control">
                        <input
                            className="input"
                            type="date"
                            name="release_date"
                            id="release_date"
                            value={release_date}
                            placeholder="YYYY-MM-DD"
                            onChange={onChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Actual Votes</label>
                    <div className="control">
                        <input
                            className="input"
                            type="number"
                            name="votes"
                            id="votes"
                            value={votes}
                            placeholder="1596"
                            onChange={onChange}
                        />
                    </div>
                </div>

                <button type="submit" className="button is-black">
                    Submit Movie
                </button>
            </form>
        </>
    );
};

export default AddMovie;
