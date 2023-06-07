import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { getMovies, reset } from "../features/movies/movieSlice";
import Card from "../components/Card/Card";
import Modal from "../components/Modal/Modal";
import Select from "../components/Select/Select";

const Dashboard = () => {
    const [data, setData] = useState(0);
    const [filter, setFilter] = useState([]);
    const [list, setList] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let modal1 = document.getElementById("modal1");

    const { user } = useSelector((state) => state.auth);

    const { movies, isLoading, isError, message } = useSelector(
        (state) => state.movie
    );

    const genre = (value) => {
        if (value == "all") {
            return setFilter(movies[0]);
        }
        let result = movies[0].filter((movie) => {
            let gen1 = movie.genre[0];
            if (movie.genre[1]) {
                let gen2 = movie.genre[1];
            }
            return gen1.toString().includes(value);
        });
        setFilter(result);
    };

    const memoList = useMemo(() => {
        if (filter.length > 0) {
            return filter;
        } else {
            return movies[0];
        }
    }, [filter, movies]);

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

    return (
        <>
            <div className="level">
                <div className="level-left">
                    <div className="level-item">
                        <div className="field has-addons">
                            <p className="control">
                                <input
                                    className="input is-rounded"
                                    id="searchInput"
                                    // onKeyUp={(e) => search(e)}
                                    type="text"
                                    placeholder="Search Movies by Name"
                                />
                            </p>
                        </div>
                    </div>
                    <div className="level-item"></div>
                </div>
                <div className="level-right">
                    <div className="level-item">
                        <h2>Filter by Genre</h2>
                    </div>
                    <div className="level-item">
                        <Select action={(v) => genre(v)}></Select>
                    </div>
                </div>
            </div>
            <div className="columns is-multiline">
                {movies.length < 1 ? (
                    <></>
                ) : (
                    memoList.map((m) => {
                        return (
                            <Card
                                key={m.id}
                                data={m}
                                getData={(d) => setData(d)}
                            />
                        );
                    })
                )}
                {Object.values(data).length != 0 ? (
                    <Modal data={data} action={() => setData(0)}></Modal>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
};

export default Dashboard;
