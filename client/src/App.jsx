import { useState } from 'react'
import HomePage from "./pages/home/home"
import Login from './pages/Login/login';
import Register from './pages/Register/register';
import { Routes, Route } from 'react-router-dom'
import "./App.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App