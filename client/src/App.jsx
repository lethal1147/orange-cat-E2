import { useState } from 'react'
import HomePage from "./pages/home/home"
import Login from './pages/Login/login';
import Register from './pages/Register/register';
import CreateCard from './pages/CreateCard/CreateCard';
import ReadCard from './pages/ReadCard/ReadCard';
import Dashboard from './pages/Dashboard/Dashboard';
import Dashboard from './pages/Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom'
import "./App.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="createcard" element={<CreateCard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="readcard" element={<ReadCard />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App