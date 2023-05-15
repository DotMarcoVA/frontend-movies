import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {} from "../features/auth/authSlice";

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { name, email, isAdmin } = user;
    let userName = name;
    if (isAdmin) {
        userName = `⭐ ${name} ⭐`;
    }

    return (
        <>
            <div>
                <p className="is-size-3 is-capitalized has-text-weight-semibold has-text-centered">
                    Welcome {userName}
                </p>
            </div>
            <div>Favorites</div>
        </>
    );
};

export default Profile;
