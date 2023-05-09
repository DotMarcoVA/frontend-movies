import React from "react";
import Logo from "../../assets/jugar CText.png";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav
                className="navbar"
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
                                <Link
                                    to="/register"
                                    className="button is-primary"
                                >
                                    <strong>Sign up</strong>
                                </Link>
                                <Link to="/login" className="button is-light">
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
