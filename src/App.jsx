import React from 'react'
import Header from './components/Header'
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contect';
import Blog from './pages/Blog/Blog';
import { BrowserRouter as Router, Routes, Route } from "react-router";



const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/Blog' element={<Blog/>} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App