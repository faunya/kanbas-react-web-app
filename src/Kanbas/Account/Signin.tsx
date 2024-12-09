import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";
import * as client from "./client";

export default function Signin() {
    const [credentials, setCredentials] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signin = async () => {
        try {
            const user = await client.signin(credentials);

            if (!user) return;
            dispatch(setCurrentUser(user));
            navigate("/Kanbas/Dashboard");

        } catch (error) {
            console.log("signin ", error)
        }

    };


    return (
        <div id="wd-signin-screen">
            <h1>Sign in</h1>
            <input
                defaultValue={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                id="wd-username"
                placeholder="username"
                className="form-control mb-2" /><br />
            <input id="wd-password"
                defaultValue={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                placeholder="password" type="password"
                className="form-control mb-2" /><br />
            <button onClick={signin} id="wd-signin-btn"
                className="btn btn-primary w-100">
                Sign in </button><br />
            <Link id="wd-signup-link" to="/Kanbas/Account/Signup">Sign up</Link>
        </div>
    );
}
