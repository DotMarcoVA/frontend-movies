import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

const Login = () => {
    const actualUser = localStorage.getItem("user");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        if (isSuccess || actualUser) {
            navigate("/dashboard");
        }
        dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch, actualUser]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const userData = { email, password };
        dispatch(login(userData));
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <form className="box p-6 m-6" onSubmit={onSubmit}>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input
                        className="input"
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        placeholder="e.g. alex@example.com"
                        onChange={onChange}
                    />
                </div>
            </div>

            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input
                        className="input"
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        placeholder="********"
                        onChange={onChange}
                    />
                </div>
            </div>

            <button type="submit" className="button is-black">
                Sign in
            </button>
            <button className="button is-white is-text">
                <Link to="/register">Create Account</Link>
            </button>
        </form>
    );
};

export default Login;
