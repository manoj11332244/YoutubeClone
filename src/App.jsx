import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import PlayingVideo from './components/PlayingVideo'
import Home from './components/Home'
import Search from './components/Search'
import { Route, Routes } from 'react-router-dom'
import {useAuth} from './context/AuthProvider'
import Loading from './loader/Loading'

function App() {
  const {loading}=useAuth()
  return (
    <div>
      {loading && <Loading/>}
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<PlayingVideo />} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App

