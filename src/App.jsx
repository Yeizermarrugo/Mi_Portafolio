import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Proyectos from './components/Proyectos/Proyectos'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'

function App() {

  return (
    <div className="App">
      <Header/>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/proyectos" element={<Proyectos/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
