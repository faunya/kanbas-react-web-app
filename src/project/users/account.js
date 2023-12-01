import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Account() {
    const [account, setAccount] = useState({ username: "", password: "", role: "USER" });

    const navigate = useNavigate();

    const save = async () => {
        console.log(account);
        await client.updateUser(account);
    };

    const signout = async () => {
        await client.signout();
        navigate("/project/signin");
    };


    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };

    useEffect(() => {
        fetchAccount();
    }, []);
    return (
        <div className="w-50">
            <h1>Account</h1>
            <button onClick={save}>
                Save
            </button>

            <button onClick={signout}>
                Signout
            </button>

            <Link to="/project/admin/users" className="btn btn-warning w-100">
                Users
            </Link>

            {account && (
                <div>
                    <input placeholder="Password" type="password" value={account.password}
                        onChange={(e) => setAccount({
                            ...account,
                            password: e.target.value
                        })} />
                    <input placeholder="First Name" value={account.firstName}
                        onChange={(e) => setAccount({
                            ...account,
                            firstName: e.target.value
                        })} />
                    <input placeholder="Last Name" value={account.lastName}
                        onChange={(e) => setAccount({
                            ...account,
                            lastName: e.target.value
                        })} />
                    <input value={account.dob}
                        onChange={(e) => setAccount({
                            ...account,
                            dob: e.target.value
                        })} />
                    <input placeholder="Email" type="email" value={account.email}
                        onChange={(e) => setAccount({
                            ...account,
                            email: e.target.value
                        })} />
                    <select onChange={(e) => setAccount({
                        ...account,
                        role: e.target.value
                    })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                </div>
            )}
        </div>
    );
}
export default Account;