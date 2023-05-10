import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
    const actualUser = localStorage.getItem("user");
    const navigate = useNavigate();

    useEffect(() => {
        if (actualUser) {
            navigate("/login");
        }
    }, [navigate, actualUser]);

    return (
        <>
            <div>Home</div>
        </>
    );
};

export default Home;
