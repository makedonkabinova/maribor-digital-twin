import React, { useState } from "react";

function Login (){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("user");
    const [error, setError] = useState("");

    async function login (event) {
        event.preventDefault();
        const res = await fetch('http://localhost:5000/'+type+'/login', {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await res.json();

        if(data.token !== undefined){
            localStorage.setItem('token', data.token);
            window.location.href="/";
        } else {
            setUsername("");
            setPassword("");
            if(data.error !== undefined)
                setError(data.error);
            else
                setError("Unexpected error");
        }
    }

    return (
        <div className={"userLogin"}>
            <h1>Login</h1>
            <form onSubmit={login}>
                <div className={"form-group"}>
                    <label>Username</label>
                    <input type={"text"} className={"form-control"} placeholder={"Enter username"} value={username}
                           onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className={"form-group"}>
                    <label>Password</label>
                    <input type={"password"} className={"form-control"} placeholder={"Enter password"} value={password}
                           onChange={e => setPassword(e.target.value)}/>
                </div>
                <input type={"submit"} name="submit" value="Log in as User" onClick={e => setType("user")}/>
                <input type={"submit"} name="submit" value="Log in as Restaurant" onClick={e => setType("restaurant")}/>
                <label>{error}</label>

            </form>
        </div>
    );
}

export default Login;