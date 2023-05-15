import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {} from "../features/auth/authSlice";

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { name, email, isAdmin } = user;
    console.log(name, email, isAdmin);

    return (
        <>
            <div>
                {name}
                {email}
                {isAdmin}
            </div>
        </>
    );
};

export default Profile;
