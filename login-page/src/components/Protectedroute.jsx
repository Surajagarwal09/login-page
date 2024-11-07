import React from 'react';
import { Navigate } from 'react-router-dom';
function ProtectedRoute({ children }) {
    const isAuthenticated = localStorage.getItem('username') !== null;
    return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
