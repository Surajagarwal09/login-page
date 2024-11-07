import React from "react";
import './Dash.css';
import { useNavigate } from "react-router-dom";
function Dashboard() {
    const username = localStorage.getItem('username');
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('username');
        navigate('/')
    }
    return (
        <>
            <nav>
                <h1 id="head">Dashboard</h1>
                <button id="logout" onClick={handleLogout}>Logout</button>
            </nav>
            <br />
            <h1 className="welcome">Welcome To Your Dashboard {username} </h1>
        </>
    )
}

export default Dashboard;