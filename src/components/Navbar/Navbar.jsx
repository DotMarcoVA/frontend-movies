import React from "react";
import Logo from "../../assets/jugar CText.png";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/login");
    };

    return (
        <>
            <nav
                className="navbar is-transparent"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                        <img src={Logo} width={160} height={52} />
                    </Link>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                {user ? (
                                    <>
                                        <div className="navbar-item">
                                            <h1>Welcome {user.name}</h1>
                                        </div>
                                        {user.isAdmin ? (
                                            <Link
                                                to="/add"
                                                className="button is-primary"
                                            >
                                                <strong>Add Movies</strong>
                                            </Link>
                                        ) : (
                                            <></>
                                        )}
                                        <Link
                                            to="/profile"
                                            className="button is-primary"
                                        >
                                            <strong>My Account</strong>
                                        </Link>
                                        <Link
                                            to="/"
                                            className="button is-primary"
                                            onClick={onLogout}
                                        >
                                            <strong>Log Out</strong>
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            to="/register"
                                            className="button is-primary"
                                        >
                                            <strong>Sign up</strong>
                                        </Link>
                                        <Link
                                            to="/login"
                                            className="button is-light"
                                        >
                                            Log in
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
