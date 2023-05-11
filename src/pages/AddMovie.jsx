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

    useEffect(() => {
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
    ]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (title) {
            <></>;
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
                    <label className="label">Genre</label>
                    <div className="control">
                        <input
                            className="input"
                            type="password"
                            name="password"
                            id="password"
                            value=""
                            placeholder="********"
                            onChange={onChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Confirm Password</label>
                    <div className="control">
                        <input
                            className="input"
                            type="password"
                            name="password2"
                            id="password2"
                            value=""
                            placeholder="********"
                            onChange={onChange}
                        />
                    </div>
                </div>

                <button type="submit" className="button is-black">
                    Create Account
                </button>
            </form>
        </>
    );
};

export default AddMovie;
