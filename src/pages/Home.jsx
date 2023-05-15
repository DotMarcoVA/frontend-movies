import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import cover from "../assets/1080p.jpg";

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
            <figure className="image is-16by9">
                <img src={cover} />
            </figure>
        </>
    );
};

export default Home;
