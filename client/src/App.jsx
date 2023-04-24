import { useState } from 'react'
import HomePage from "./pages/home/home"
import Login from './pages/Login/login';
import Register from './pages/Register/register';
import CreateCard from './pages/CreateCard/CreateCard';
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
      </Routes>
    </div>
  )
}

export default App