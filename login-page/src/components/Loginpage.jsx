import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css'
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleusername = (event) => {
        setUsername(event.target.value)
    }
    const handlepassword = (event) => {
        setPassword(event.target.value)
    }
    const handlesubmit = (Event) => {
        Event.preventDefault()
        const correctusername = 'suraj';
        const correctpassword = '12345';
        if (username === correctusername && password === correctpassword) {
            localStorage.setItem('username', username);
            navigate('/dashboard')
        }
        else {
            alert("Incorrect Username or Passsword");
        }
    }

    return (
        <>
            <div className="loginitem">
                <form id="form" onSubmit={handlesubmit}>
                    <h1 className="head">LOGIN</h1>
                    <label htmlFor="username">User Name: </label>
                    <input id="username" type="text" placeholder="User Name" onChange={handleusername} /><br />
                    <label htmlFor="password">Password: &nbsp;&nbsp;&nbsp;</label>
                    <input id="password" type="password" placeholder="Password" onChange={handlepassword} /><br />
                    <button id="login" type="submit" >Login</button>
                    <p id="link">Don't Have an Account? Signup.</p>
                </form>
            </div>
        </>
    )
}

export default Login;