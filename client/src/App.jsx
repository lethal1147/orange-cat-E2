import { useState } from 'react'
import HomePage from "./pages/home/home"
import Login from './pages/Login/login';
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
