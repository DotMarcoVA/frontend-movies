import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

const Register = () => {
    const actualUser = localStorage.getItem("user");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    const { name, email, password, password2 } = formData;

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
            navigate("/login");
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

        if (password !== password2) {
            toast.error("Las contraseñas con coinciden");
        } else {
            const userData = { name, email, password };
            dispatch(register(userData));
        }
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <form className="box p-6 m-6" onSubmit={onSubmit}>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        placeholder="Zack Herleman"
                        onChange={onChange}
                    />
                </div>
            </div>

            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input
                        className="input"
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        placeholder="alex@example.com"
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

            <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control">
                    <input
                        className="input"
                        type="password"
                        name="password2"
                        id="password2"
                        value={password2}
                        placeholder="********"
                        onChange={onChange}
                    />
                </div>
            </div>

            <button type="submit" className="button is-black">
                Create Account
            </button>
        </form>
    );
};

export default Register;
