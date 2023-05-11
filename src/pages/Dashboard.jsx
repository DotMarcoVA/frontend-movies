import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { getMovies, reset } from "../features/movies/movieSlice";
import Card from "../components/Card/Card";

const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const { movies, isLoading, isError, message } = useSelector(
        (state) => state.movie
    );

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        if (!user) {
            navigate("/login");
        }

        dispatch(getMovies());

        return () => {
            dispatch(reset());
        };
    }, [user, navigate, isError, message, dispatch]);

    if (isLoading) {
        return <Spinner />;
    }

    if (!isLoading) {
        console.log(movies);
    }

    return (
        <>
            <div>Este es un Dashboard</div>
            <div className="columns is-multiline">
                {movies.length < 1 ? (
                    <></>
                ) : (
                    movies[0].map((m) => {
                        return <Card key={m.id} data={m} />;
                    })
                )}
                {}
            </div>
        </>
    );
};

export default Dashboard;
