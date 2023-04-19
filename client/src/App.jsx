import { useState } from 'react'
import Home from './pages/home/home'
import Layout from './component/layout/layout'
import { Routes, Route } from 'react-router-dom'
import HomeNavNotLogin from './component/home-nav-notlogin/homenavnotlogin'
import "./App.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
