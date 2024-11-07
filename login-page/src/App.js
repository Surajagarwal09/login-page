import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Loginpage';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/Protectedroute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
    </div>
  );
}

export default App;
